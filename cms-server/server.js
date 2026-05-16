import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { put, list, del } from '@vercel/blob';
import { config } from 'dotenv';

config(); // Load .env

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const upload = multer({ storage: multer.memoryStorage() });

const CMS_BLOB_KEY = 'cms-data.json';

// ===== GET /api/data — load CMS data from Vercel Blob =====
app.get('/api/data', async (req, res) => {
  try {
    const { blobs } = await list({ prefix: CMS_BLOB_KEY, token: process.env.BLOB_READ_WRITE_TOKEN });
    if (blobs.length === 0) return res.json(null);

    const response = await fetch(blobs[0].url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('GET /api/data error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ===== POST /api/data — save CMS JSON to Vercel Blob =====
app.post('/api/data', async (req, res) => {
  try {
    const json = JSON.stringify(req.body, null, 2);
    const blob = await put(CMS_BLOB_KEY, json, {
      access: 'public',
      contentType: 'application/json',
      token: process.env.BLOB_READ_WRITE_TOKEN,
      allowOverwrite: true,
    });
    res.json({ success: true, url: blob.url });
  } catch (err) {
    console.error('POST /api/data error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ===== POST /api/upload — upload image to Vercel Blob =====
app.post('/api/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file' });

    const filename = `uploads/${Date.now()}-${req.file.originalname.replace(/\s/g, '-')}`;
    const blob = await put(filename, req.file.buffer, {
      access: 'public',
      contentType: req.file.mimetype,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      allowOverwrite: true,
    });

    res.json({ url: blob.url });
  } catch (err) {
    console.error('POST /api/upload error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log('✅ CMS Server running on http://localhost:3001');
  console.log('   Token:', process.env.BLOB_READ_WRITE_TOKEN ? 'loaded ✓' : 'MISSING ✗');
});

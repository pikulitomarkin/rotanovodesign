import express from 'express';
import cors from 'cors';
import multer from 'multer';
import pg from 'pg';
import { config } from 'dotenv';

config(); // Load .env

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

const upload = multer({ storage: multer.memoryStorage() });

// ===== GET /api/data — load CMS data from Postgres =====
app.get('/api/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT data FROM cms_data WHERE id = 1');
    if (result.rows.length === 0) return res.json(null);
    res.json(result.rows[0].data);
  } catch (err) {
    console.error('GET /api/data error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ===== POST /api/data — save CMS JSON to Postgres =====
app.post('/api/data', async (req, res) => {
  try {
    const json = JSON.stringify(req.body);
    const exists = await pool.query('SELECT id FROM cms_data WHERE id = 1');
    if (exists.rows.length > 0) {
      await pool.query('UPDATE cms_data SET data = $1 WHERE id = 1', [json]);
    } else {
      await pool.query('INSERT INTO cms_data (id, data) VALUES (1, $1)', [json]);
    }
    res.json({ success: true, url: '/api/data' });
  } catch (err) {
    console.error('POST /api/data error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// Use express.raw to read raw body for image upload
app.post('/api/upload', express.raw({ type: 'image/*', limit: '50mb' }), async (req, res) => {
  try {
    const buffer = req.body;
    if (!buffer || !Buffer.isBuffer(buffer)) {
      return res.status(400).json({ error: 'No valid image data received in raw body.' });
    }

    const filename = req.query.filename || `upload-${Date.now()}`;
    const mimetype = req.headers['content-type'] || 'application/octet-stream';

    const result = await pool.query(
      'INSERT INTO cms_images (filename, content_type, data) VALUES ($1, $2, $3) RETURNING id',
      [filename, mimetype, buffer]
    );

    res.json({ url: `/api/image?id=${result.rows[0].id}` });
  } catch (err) {
    console.error('POST /api/upload error:', err.message);
    res.status(500).json({ error: err.message });
  }
});

// ===== GET /api/image — serve image from Postgres =====
app.get('/api/image', async (req, res) => {
  try {
    const id = parseInt(req.query.id);
    if (isNaN(id)) return res.status(400).send('Invalid ID');

    const result = await pool.query('SELECT content_type, data FROM cms_images WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).send('Not found');

    res.setHeader('Content-Type', result.rows[0].content_type);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.send(result.rows[0].data);
  } catch (err) {
    console.error('GET /api/image error:', err.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log('✅ CMS Server running on http://localhost:3001');
  console.log('   Database connected ✓');
});

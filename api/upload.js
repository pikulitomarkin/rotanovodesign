import { put } from '@vercel/blob';

// Disable default body parser — we read raw stream
export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  try {
    const filename = req.query.filename || `upload-${Date.now()}`;
    const contentType = req.headers['content-type'] || 'image/jpeg';

    const blob = await put(`uploads/${Date.now()}-${filename}`, req, {
      access: 'public',
      contentType,
      token: process.env.BLOB_READ_WRITE_TOKEN,
      allowOverwrite: true,
    });

    res.status(200).json({ url: blob.url });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message });
  }
}

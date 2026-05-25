import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

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
    const contentType = req.headers['content-type'] || 'application/octet-stream';

    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const buffer = Buffer.concat(chunks);

    const result = await pool.query(
      'INSERT INTO cms_images (filename, content_type, data) VALUES ($1, $2, $3) RETURNING id',
      [filename, contentType, buffer]
    );

    const imageId = result.rows[0].id;
    const url = `/api/image?id=${imageId}`;

    res.status(200).json({ url });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message });
  }
}

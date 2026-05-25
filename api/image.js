import pg from 'pg';
const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();

  try {
    const id = parseInt(req.query.id);
    if (isNaN(id)) return res.status(400).send('Invalid ID');

    const result = await pool.query('SELECT content_type, data FROM cms_images WHERE id = $1', [id]);
    
    if (result.rows.length === 0) return res.status(404).send('Image not found');

    const image = result.rows[0];
    
    res.setHeader('Content-Type', image.content_type);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.send(image.data);
  } catch (err) {
    console.error('Image serve error:', err);
    res.status(500).send('Internal Server Error');
  }
}

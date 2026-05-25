import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT data FROM cms_data WHERE id = 1');
      if (result.rows.length === 0) return res.status(200).json(null);
      res.status(200).json(result.rows[0].data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const json = JSON.stringify(req.body);
      const exists = await pool.query('SELECT id FROM cms_data WHERE id = 1');
      if (exists.rows.length > 0) {
        await pool.query('UPDATE cms_data SET data = $1 WHERE id = 1', [json]);
      } else {
        await pool.query('INSERT INTO cms_data (id, data) VALUES (1, $1)', [json]);
      }
      res.status(200).json({ success: true, url: '/api/data' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return;
  }

  res.status(405).end();
}

import { put, list } from '@vercel/blob';

const CMS_KEY = 'cms-data.json';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    try {
      const { blobs } = await list({ prefix: CMS_KEY, token: process.env.BLOB_READ_WRITE_TOKEN });
      if (!blobs.length) return res.status(200).json(null);
      const response = await fetch(blobs[0].downloadUrl || blobs[0].url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const json = JSON.stringify(req.body, null, 2);
      const blob = await put(CMS_KEY, json, {
        access: 'public',
        contentType: 'application/json',
        token: process.env.BLOB_READ_WRITE_TOKEN,
        allowOverwrite: true,
      });
      res.status(200).json({ success: true, url: blob.url });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
    return;
  }

  res.status(405).end();
}

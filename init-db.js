import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function init() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS cms_data (
        id SERIAL PRIMARY KEY,
        data JSONB NOT NULL
      );
    `);
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS cms_images (
        id SERIAL PRIMARY KEY,
        filename TEXT NOT NULL,
        content_type TEXT NOT NULL,
        data BYTEA NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    console.log("Database initialized successfully!");
  } catch (err) {
    console.error("Failed to initialize database:", err);
  } finally {
    pool.end();
  }
}

init();

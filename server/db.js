import { DatabaseSync } from "node:sqlite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = process.env.DB_PATH || path.join(__dirname, "data", "kis.sqlite");

// Ensure the data directory exists.
import { mkdirSync } from "node:fs";
mkdirSync(path.dirname(DB_PATH), { recursive: true });

export const db = new DatabaseSync(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS enquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    source TEXT DEFAULT 'website',
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

export function insertEnquiry({ name, email, message, source = "website" }) {
  const stmt = db.prepare(
    `INSERT INTO enquiries (name, email, message, source) VALUES (?, ?, ?, ?)`
  );
  const info = stmt.run(name, email, message, source);
  return getEnquiryById(info.lastInsertRowid);
}

export function getEnquiryById(id) {
  return db.prepare(`SELECT * FROM enquiries WHERE id = ?`).get(id);
}

export function listEnquiries({ limit = 50, offset = 0 } = {}) {
  return db
    .prepare(`SELECT * FROM enquiries ORDER BY created_at DESC LIMIT ? OFFSET ?`)
    .all(limit, offset);
}

export function countEnquiries() {
  return db.prepare(`SELECT COUNT(*) AS count FROM enquiries`).get().count;
}

import express from "express";
import cors from "cors";
import "dotenv/config";
import { insertEnquiry, listEnquiries, countEnquiries } from "./db.js";

const app = express();
const PORT = process.env.PORT || 3001;
const ADMIN_KEY = process.env.ADMIN_KEY || "kis-admin-dev-key";

app.use(cors());
app.use(express.json({ limit: "10kb" }));

// Very small rate limiter: max 5 enquiries per IP per 10 minutes, in-memory.
const submissionLog = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000;
  const timestamps = (submissionLog.get(ip) || []).filter((t) => now - t < windowMs);
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > 5;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", enquiries: countEnquiries() });
});

app.post("/api/enquiries", (req, res) => {
  const ip = req.ip;
  if (rateLimited(ip)) {
    return res.status(429).json({ error: "Too many enquiries from this address. Please try again later." });
  }

  const { name, email, message } = req.body ?? {};

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    return res.status(400).json({ error: "Please enter a valid name." });
  }
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }
  if (typeof message !== "string" || message.trim().length < 5 || message.trim().length > 2000) {
    return res.status(400).json({ error: "Please enter a message (at least 5 characters)." });
  }

  const enquiry = insertEnquiry({
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  });

  res.status(201).json({ data: enquiry });
});

// Simple header-key protected admin listing — fine for an intern demo,
// swap for real auth (sessions/JWT) before any real production use.
app.get("/api/enquiries", (req, res) => {
  if (req.header("x-admin-key") !== ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const limit = Math.min(Number(req.query.limit) || 50, 200);
  const offset = Number(req.query.offset) || 0;
  res.json({ data: listEnquiries({ limit, offset }), total: countEnquiries() });
});

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong. Please try again." });
});

app.listen(PORT, () => {
  console.log(`KIS API listening on http://localhost:${PORT}`);
});

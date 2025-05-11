import { db } from '../config/db.js';

export const submitApplication = async (req, res) => {
  const { job_id, user_id, user_name, user_email, cover_letter } = req.body;
  await db.query(
    'INSERT INTO applications (job_id, user_id, user_name, user_email, cover_letter) VALUES (?, ?, ?, ?, ?)',
    [job_id, user_id, user_name, user_email, cover_letter]
  );
  res.json({ success: true });
};

export const getUserApplications = async (req, res) => {
  const userId = req.params.userId;
  const [rows] = await db.query(
    'SELECT a.*, j.title, j.company FROM applications a JOIN jobs j ON a.job_id = j.id WHERE a.user_id = ? ORDER BY a.applied_at DESC',
    [userId]
  );
  res.json(rows);
};
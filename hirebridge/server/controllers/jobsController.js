import { db } from '../config/db.js';

export const getJobs = async (req, res) => {
  const [rows] = await db.query('SELECT * FROM jobs ORDER BY id DESC');
  res.json(rows);
};

export const postJob = async (req, res) => {
  const { title, company, budget, skills, image, role } = req.body;
  await db.query(
    'INSERT INTO jobs (title, company, budget, skills, image, role) VALUES (?, ?, ?, ?, ?, ?)',
    [title, company, budget, JSON.stringify(skills), image, role]
  );
  res.json({ success: true });
};
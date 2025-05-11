import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jobsRoutes from './routes/jobs.js';
import applicationsRoutes from './routes/applications.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobsRoutes);
app.use('/api/applications', applicationsRoutes);

app.listen(8800, () => {
  console.log('Backend server running on port 8800');
});
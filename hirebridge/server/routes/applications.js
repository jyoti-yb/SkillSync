import express from 'express';
import { submitApplication, getUserApplications } from '../controllers/applicationsController.js';

const router = express.Router();

router.post('/', submitApplication);
router.get('/:userId', getUserApplications);

export default router;
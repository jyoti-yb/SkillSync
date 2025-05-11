import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Box,
    Alert
  } from '@mui/material';
  import { useState } from 'react';
  
  // Random descriptions
  const jobDescriptions = [
    "Join our growing startup to build scalable applications with the latest tech stack.",
    "Design stunning visuals and branding assets for our new marketing campaign.",
    "Analyze and visualize data to help us grow smarter and faster.",
    "Build APIs and backend infrastructure for a fast-growing SaaS platform.",
    "Write content that converts, ranks, and retains readers in multiple industries."
  ];
  function getRandomDescription() {
    return jobDescriptions[Math.floor(Math.random() * jobDescriptions.length)];
  }
  
  export default function JobCard({ job }: any) {
    const [open, setOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', cover: '' });
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  
    const handleSubmit = () => {
      console.log("Application submitted:", { ...form, job: job.title });
      setSubmitted(true);
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
        setForm({ name: '', email: '', cover: '' });
        setShowForm(false);
      }, 1500);
    };
  
    return (
      <>
        <Card>
          {job.image && (
            <CardMedia
              component="img"
              height="160"
              image={job.image}
              alt={job.title}
            />
          )}
          <CardContent>
            <Typography variant="h6">{job.title}</Typography>
            <Typography variant="subtitle2">{job.company}</Typography>
            <Typography sx={{ mt: 1 }}>Budget: {job.budget}</Typography>
            <div style={{ marginTop: 10 }}>
              {job.skills.map((skill: string) => (
                <Chip
                  key={skill}
                  label={skill}
                  size="small"
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </div>
            <Button fullWidth variant="outlined" sx={{ mt: 2 }} onClick={() => setOpen(true)}>
              View Details
            </Button>
            <Button fullWidth variant="contained" sx={{ mt: 1 }} onClick={() => setOpen(true)}>
              Apply
            </Button>
          </CardContent>
        </Card>
  
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>{job.title}</DialogTitle>
          <DialogContent dividers>
            <Typography variant="subtitle1"><strong>Company:</strong> {job.company}</Typography>
            <Typography variant="subtitle1"><strong>Role:</strong> {job.role || job.title}</Typography>
            <Typography variant="subtitle1"><strong>Budget:</strong> {job.budget}</Typography>
            <Typography variant="subtitle1"><strong>Skills:</strong> {job.skills.join(', ')}</Typography>
            <Typography sx={{ mt: 2 }}>{getRandomDescription()}</Typography>
  
            {showForm && (
              <Box mt={3} display="flex" flexDirection="column" gap={2}>
                <TextField label="Your Name" name="name" value={form.name} onChange={handleChange} />
                <TextField label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
                <TextField
                  label="Cover Letter"
                  name="cover"
                  multiline
                  rows={4}
                  value={form.cover}
                  onChange={handleChange}
                />
                {submitted && <Alert severity="success">Application submitted!</Alert>}
              </Box>
            )}
          </DialogContent>
  
          <DialogActions>
            {showForm ? (
              <>
                <Button onClick={() => setShowForm(false)}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained">Submit Application</Button>
              </>
            ) : (
              <>
                <Button onClick={() => setOpen(false)}>Close</Button>
                <Button variant="contained" onClick={() => setShowForm(true)}>Apply Now</Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      </>
    );
  }
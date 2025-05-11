// src/pages/CreateJob.tsx
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function CreateJob() {
  const [form, setForm] = useState({ title: '', company: '', budget: '', skills: '' });

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    console.log('Job created:', form);
    // Add POST to backend here
  };

  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h4" gutterBottom>Post a New Job</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField label="Job Title" name="title" onChange={handleChange} />
        <TextField label="Company Name" name="company" onChange={handleChange} />
        <TextField label="Budget" name="budget" onChange={handleChange} />
        <TextField label="Required Skills (comma separated)" name="skills" onChange={handleChange} />
        <Button variant="contained" onClick={handleSubmit}>Create Job</Button>
      </Box>
    </Container>
  );
}
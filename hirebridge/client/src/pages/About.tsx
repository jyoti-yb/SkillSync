// src/pages/About.tsx
import { Container, Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ pt: 10 }}>
      <Typography variant="h4" gutterBottom>About SkillSync</Typography>
      <Typography variant="body1" paragraph>
        SkillSync is a freelancer marketplace where businesses connect with talent across the globe. We empower
        professionals to find flexible jobs and enable companies to build high-performance teams with ease.
      </Typography>
      <Typography variant="body1" paragraph>
        Built with passion by developers who understand freelancing pain points and want to change the way people work.
      </Typography>
    </Container>
  );
}
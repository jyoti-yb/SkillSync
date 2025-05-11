// src/pages/Profile.tsx
import { Container, Typography, Box } from '@mui/material';
import { useUser } from '@clerk/clerk-react';

export default function Profile() {
  const { user } = useUser();

  return (
    <Container sx={{ pt: 10 }}>
      <Typography variant="h4" gutterBottom>Your Profile</Typography>
      <Box mt={2}>
        <Typography><strong>Name:</strong> {user?.fullName}</Typography>
        <Typography><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</Typography>
        <Typography><strong>User ID:</strong> {user?.id}</Typography>
      </Box>
    </Container>
  );
}
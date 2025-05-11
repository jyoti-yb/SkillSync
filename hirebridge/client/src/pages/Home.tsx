import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Box sx={{ pt: 8, pb: 10, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          {/* Text Content */}
          <Box flex={1}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Connect. Collaborate. Succeed.
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              SkillSync is your go-to platform for hiring top freelancers or finding remote gigs that match your skills.
            </Typography>

            <Box mt={4}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ mr: 2 }}
                component={RouterLink}
                to="/sign-up"
              >
                Get Started
              </Button>
              <Button
                variant="outlined"
                size="large"
                component={RouterLink}
                to="/about"
              >
                Learn More
              </Button>
            </Box>
          </Box>

          {/* Image */}
          <Box flex={1}>
            <img
              src="https://fastly.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU"
              alt="Team Illustration"
              style={{ width: '100%', maxHeight: 400 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
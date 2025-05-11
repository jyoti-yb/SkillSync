import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useUser, SignedIn, SignedOut } from '@clerk/clerk-react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { user } = useUser();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#0d47a1' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component={RouterLink} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
          SkillSync
        </Typography>

        <Box display="flex" gap={2}>
          {/* Public routes */}
          <Button color="inherit" component={RouterLink} to="/about">About</Button>

          {/* When NOT signed in */}
          <SignedOut>
            <Button color="inherit" component={RouterLink} to="/sign-in">Login</Button>
            <Button color="inherit" component={RouterLink} to="/sign-up">Sign Up</Button>
          </SignedOut>

          {/* When signed in */}
          <SignedIn>
            <Button color="inherit" component={RouterLink} to="/dashboard">Dashboard</Button>
            <Button color="inherit" component={RouterLink} to="/create-job">Post a Job</Button>
            <Button color="inherit" component={RouterLink} to="/profile">
              {user?.firstName || "Profile"}
            </Button>
          </SignedIn>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
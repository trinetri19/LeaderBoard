import React from 'react';
import { Box, Typography, Container, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              LeaderBoard System
            </Typography>
            <Typography variant="body2">
              Built with React & Node.js
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/select-user" color="inherit" underline="hover" display="block">
              Select User
            </Link>
            <Link href="/leaderboard" color="inherit" underline="hover" display="block">
              Leaderboard
            </Link>
            <Link href="/new-user" color="inherit" underline="hover" display="block">
              New User
            </Link>
          </Grid>

          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">Email: rajagraharitrinetri@gmail.com</Typography>
            <Typography variant="body2">© {new Date().getFullYear()} All rights reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

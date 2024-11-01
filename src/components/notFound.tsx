import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: 4 
      }}
    >
      <img 
        src="https://via.placeholder.com/150?text=No+Movies+Found" 
        alt="No movies found" 
        style={{ marginBottom: 16, width: '350px', height: '350px' }} 
      />

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        No movies found :(
      </Typography>
      <Typography variant="body2">
        Try searching with a different term.
      </Typography>

      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => window.location.reload()}
        style={{ marginTop: 16 }}
      >
        Refresh Page
      </Button>
    </Box>
  );
}

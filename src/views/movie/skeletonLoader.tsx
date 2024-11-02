// src/components/MovieDetailSkeleton.tsx
import React from 'react';
import { Box, Typography, Skeleton, Container } from '@mui/material';

export default function MovieDetailSkeleton() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Skeleton sx={{ bgcolor: 'grey.900' }} variant="text" width={200} height={40} />
        <Skeleton sx={{ bgcolor: 'grey.900' }} variant="rectangular" width={300} height={450} />
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1">
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="40%" />
          </Typography>
          <Typography variant="body1">
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="60%" />
          </Typography>
          <Typography variant="body1">
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="50%" />
          </Typography>
          <Typography variant="body1">
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="70%" />
          </Typography>
          <Typography variant="body1">
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="80%" />
          </Typography>
          <Typography variant="body1">
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="30%" />
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="90%" />
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="95%" />
            <Skeleton sx={{ bgcolor: 'grey.900' }} width="80%" />
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

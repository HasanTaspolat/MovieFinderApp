import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { SkeletonLoaderProps } from '../../types';

export default function SkeletonLoader({ count = 10 }: SkeletonLoaderProps) {
  return (
    <Grid container spacing={2} className='skeleton-wrapper'>
      {Array.from(new Array(count)).map((_, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box sx={{ width: '100%', margin: 'auto' }}>
            <Skeleton
              sx={{ bgcolor: 'grey.900' }}
              variant="rectangular"
              width={320}
              height={320}
            />
            <Skeleton sx={{ bgcolor: 'grey.900', mt: 1 }} width="80%" height={20} />
            <Skeleton sx={{ bgcolor: 'grey.900', mt: 0.5 }} width="60%" height={20} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

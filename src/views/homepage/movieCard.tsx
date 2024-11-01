import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ImgMediaCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ImgMediaCard({ title, description, image }: ImgMediaCardProps) {
  return (
    <Card sx={{ minWidth: 220 }} className='custom-cards-style'>
      <CardMedia className='card-image' component="img" alt={title} height="200" image={image} />
      <CardContent className='custom-cards-style__content'>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

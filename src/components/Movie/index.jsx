import './index.scss';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import * as React from 'react';

export default function MediaCard({
  name,
  releaseYear,
  image,
  addToFavorite,
}) {
  return (
    <Card className="movie-card">
      <CardMedia image={image} className="movie-image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Año: {releaseYear}
        </Typography>
      </CardContent>
      <CardActions className="button-container">
        <Button
          onClick={addToFavorite}
          className="add-button"
          style={{ color: 'black' }}
          size="small">
          Add
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  releaseYear: PropTypes.number,
};

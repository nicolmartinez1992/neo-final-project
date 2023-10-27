import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
import * as React from 'react';
import './index.scss';

const MediaCard = ({ image, title, price, category }) => (
  <div className="product-card">
    <div className="image-container">
      <img className="product-image" src={image} alt="" />
    </div>
    <div className="info-container">
      <h2>{title}</h2>
      <p>Price: US${price}</p>
      <p>Categoria:{category}</p>
    </div>
    <div className="button-container">
      <button className="add-button">Add</button>
    </div>
  </div>
  // <Card className="product-card">
  //   <div className="card">
  //     <CardMedia image={image} className="product-image" />
  //     <CardContent className="card-content">
  //       <Typography gutterBottom variant="h5" component="div">
  //         {title}
  //       </Typography>
  //       <Typography variant="body2" color="text.secondary">
  //         Price: US${price}
  //       </Typography>
  //     </CardContent>
  //     <CardActions className="button-container">
  //       <Button className="add-button" size="small">
  //         Add
  //       </Button>
  //     </CardActions>
  //   </div>
  // </Card>
);

MediaCard.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default MediaCard;

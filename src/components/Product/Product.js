import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

let MediaCard = function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            $0.99
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}

export default MediaCard;
// class Product extends React.Component {
//     render(){
//      return (
//        <div className="Product">
//      <div className="image-container">
//        <img src={this.props.Product.imageSrc} alt=''/>
//      </div>
//      <h2>{this.props.Product.name}</h2>
//      <div className="Product-information">
//        <div className="Product-address">
//          <p>{this.props.Product.address}</p>
//          
//      
//        </div>
//        
//          
//          <h3 className="rating">{this.props.Product.rating}</h3>
//          <p>{this.props.Product.reviewCount} reviews </p>
//        </div>
//      </div>
//    </div>  
//      );   
//     }
//    }
// export default Product;
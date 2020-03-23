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

const products = [
              {   
      productName: "Pressure Cooker",
      productPrice: 99.99,
      productImg: 'https://picsum.photos/200/300',
      ProductDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante.'
              },
          {
      productName: "Pressure Cooker",
      productPrice: 99.99,
      productImg: 'https://picsum.photos/200/300',
      ProductDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante.'
      
              },
          {
      productName: "Pressure Cooker",
      productPrice: 99.99,
      productImg: 'https://picsum.photos/200/300',
      ProductDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante.'
      
              },
          {
      productName: "Pressure Cooker",
      productPrice: 99.99,
      productImg: 'https://picsum.photos/200/300',
      ProductDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet vulputate arcu. Nam auctor urna nec dui pretium, vitae pharetra erat sodales. Maecenas gravida, metus tincidunt scelerisque feugiat, nisl dui porttitor enim, sed mattis erat augue non ante.'
                
          }
      ]   
  


let MediaCard = function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          {products.map( (products) => {products.productImg})}
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {products.map( (products) => (
              <>
              <div>{products.productName}</div>
              <Typography>{products.productPrice}</Typography>
              <CardMedia className={classes.media}src={products.productsImg}/>
              </>
              ))}
              
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
      </CardActions> */}
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
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import product from '../Product/Product.js';
import MediaCard from '../Product/Product.js'
// import './Product.css';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 345,
    width: 300,
    marginBottom: '5%',
  },
  title: {
    marginBottom: '10%',
  }
});

export default function Product(props) {
  const {productInfo} = props;


  // const [spacing] = React.useState(1);
  const classes = useStyles();

console.log(props.productInfo.productImg);

  return (
    <div style={{maxWidth: '400px', height: '600px', padding: '10px'}}>
    <Card >
    <CardActionArea>
       {/* <CardMedia
        className={classes.media}
        {products.map( (products) => {products.productImg})}
      />  */}
      <CardContent className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
 
              <CardMedia className={classes.media} image={productInfo.productImg} />
              <div className={classes.title} >{productInfo.productName}<Typography>{productInfo.productPrice}</Typography></div>
          
        </Typography>
      </CardContent>
    </CardActionArea>
    {/* <CardActions>
    </CardActions> */}
  </Card>
  </div>
  );
}
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 345,
    width: 300,
    marginBottom: '10%'
  }
});

const product = [
  {
    productName: "Color Curtains",
    productPrice: "$20.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=595210fe588e0d5882885f9d&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Tricycle Bike Flower Basket",
    productPrice: "$4.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5bb09f17a90b244d2642e7b5&s=10&w=600&h=600&q=80",
  },
  {
    productName: "Bathroom Toilet Paper Holder",
    productPrice: "$4.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5def3d0815470902af1ad2d6&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Over Door Tea Towel Rack",
    productPrice: "$2.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5c4172a54bc2ee5d6bde30f6&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Reusable Silicone Straws",
    productPrice: "$2.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5d0c9460ffb6325c8c8ebfc2&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Cute Cat Spoon",
    productPrice: "$1.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5e5223ffb8824e051bb3bf75&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Noodle Bowl With Lid",
    productPrice: "$6.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5ae2d17247d3ae4ce23d5656&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Hammock Chair",
    productPrice: "$10.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5dcb81b3b585dc0503c2c469&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Jar Opener",
    productPrice: "$4.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=57490d7467ad6d60b33d733b&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Wall Hanging Tapestries",
    productPrice: "$7.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5d523127a187f90605c43634&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Over Sink Kitchen Shelf",
    productPrice: "$107.0",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5cf63dd840beec1e14b90430&s=0&w=600&h=600&q=80",
  },
  {

    productName: "Fabric Shoe Rack",
    productPrice: "$20.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5e01ec58ea56e007396de6d6&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Cabinet Wardrobe Stickers",
    productPrice: "$2.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=55a38f71d20f23422332d6a9&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Plush Blanket Hoodie",
    productPrice: "$24.0",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5da823186cea2310af95d145&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Gaming Chair ",
    productPrice: "$97.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5e4b6d2ab9fc2e0caa4be905&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Automatic Toothpaste Dispenser",
    productPrice: "$8.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5d79b8e4432fb81983014f43&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Winter Bathroom",
    productPrice: "$2.70",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5a6b06517482a3524799ca9c&s=0&w=600&h=600&q=80",
  },
  {
    productName: "Cute animal pillowcase",
    productPrice: "$3.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5c3835df5a872039b0ad7ba4&s=0&q=80",
  },
  {
    productName: "Floor Mat Bathroom Three-piece",
    productPrice: "$9.00",
    productImg: "https://contestimg.wish.com/api/image/fetch?contest_id=5d9d84d9b2269411ef11e7c6&s=1&w=600&h=600&q=80",
  }
];

let MediaCard = function MediaCard() {
  const classes = useStyles();

  return (
    <Card >
      <CardActionArea>
         {/* <CardMedia
          className={classes.media}
          {products.map( (products) => {products.productImg})}
        />  */}
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.map(product => (
              <>
                <CardMedia className={classes.media} image={product.productImg} />
                <div>{product.productName}<Typography>{product.productPrice}</Typography></div>
                {/* <Typography>{product.productPrice}</Typography> */}
              </>
            ))}
          </Typography>
          {/* <Typography
            variant="body2"
            color="textSecondary"
            component="p"
          ></Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
      </CardActions> */}
    </Card>
  );
};

export default MediaCard;

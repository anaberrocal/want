import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";

import Product from "../Product/Product.js";

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



const ProductList = (props) => {






  // const [refetch, setRefetch]= useState(false)
  const [searchTarget, setSearchTarget] = useState('')
const [products, setProducts] = useState([
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
    productName: "Toilet Paper Holder",
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
  },
  {
    productName: "True Wireless Earbud",
    productPrice: "$0.74",
    productImg: "https://contestimg.wish.com/api/webimage/5dafb00d34a93804a890b417-0-large?cache_buster=2decd371275c3220745d2d93ed1a9a90",
  }
]);


// React.useEffect(()=>{

// fetch('restapiurl').then((res)=> res.json()).then((data)=>setProducts(data))


// },[])

const displayProducts = ()=>{


  return products.filter((prod)=> !searchTarget || searchTarget === prod.productName).map((product, i)=> {


return <Product productInfo={product} />

  })
}


const classes = useStyles();
{/* <button onClick={()=>{setRefetch(!refetch)}}/> */}
  return (<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>

{/* 
<input onChange={(e)=>{
setSearchTarget(e.target.value)
}} /> */}

  {displayProducts()}
</div>
  );
};
export default ProductList;
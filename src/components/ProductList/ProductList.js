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
import './ProductList.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  // paper: {
  //   height: 300,
  //   width: 300,
  // },
  control: {
    padding: theme.spacing(2),
  },
  mediaCard: {
    // height: 500,
    // width: 300,
  },
}));

export default function ProductList(props) {
  


  // const [spacing] = React.useState(1);
  // const classes = useStyles();

console.log(props);

  return (
    <div  id="container">
    
    </div>
  );
}
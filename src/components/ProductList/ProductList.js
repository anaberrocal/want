import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Product from '../Product/Product.js';
import MediaCard from '../Product/Product.js'
import './ProductList.js';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   height: 300,
  //   width: 300,
  // },
  control: {
    padding: theme.spacing(2),
  },
  mediaCard: {
    height: 300,
    width: 300,
  },
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();


  return (
    <Grid id="container" container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
            <Grid key={value} item className={classes.mediaCard}>
              {/* <Paper className={classes.paper} /> */}
              <MediaCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
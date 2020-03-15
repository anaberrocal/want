import React from 'react';
import './App.css';
import { UserForm } from '../Login/UserForm';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar  from '../AppBar/AppBar.js';
import NavBar from '../NavBar/NavBar.js';
import Product from '../Product/Product.js';
import ProductList from '../ProductList/ProductList.js';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import { MuiThemeProvider } from 'material-ui/styles';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#33ccff'
    },
    secondary: {
      main: '#ffffff',
    }

  },
  status: {
    danger: '#33ccff',
  },
});

function App() {
console.log(theme);
  return (
    <MuiThemeProvider >
  <div className="App">
    <ThemeProvider theme={theme}>
        <AppBar />
        <NavBar />
        <Product />
        <ProductList/>
       <UserForm />
    
    </ThemeProvider>
    </div>
    </MuiThemeProvider>
    
  );
}

export default App;

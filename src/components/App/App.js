import React from 'react';
import './App.css';
// import { UserForm } from '../Login/UserForm';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import AppBar  from '../AppBar/AppBar.js';
import NavBar from '../NavBar/NavBar.js';
// import Product from '../Product/Product.js';
import ProductList from '../ProductList/ProductList.js';
// import { List, ListItem } from 'material-ui/List';
// import RaisedButton from 'material-ui/RaisedButton';
// import { MuiThemeProvider } from 'material-ui/styles';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#33ccff',
      secondary: '#ffffff',
      
    },
    secondary: {
      main: '#ffffff',
     
    }

  },
  typography: {
    textTransform: 'none',
    fontFamily: 'Montserrat',
    // fontFamily: 'sans-serif',
    fontWeight: 500,
  },
});

function App() {
// console.log(theme);
  return (
    
  <div className="App">
    <ThemeProvider theme={theme}>
        <AppBar />
        <NavBar />
        {/* <div id="dots-container">
          <div class="snippet" data-title=".dot-pulse">
            <div class="stage">
              <div class="dot-pulse"></div>
            </div>
          </div>
        </div> */}
        <ProductList />
    <div id="footer-container"><footer className="footer">Made with <span>❤️</span> by <a target="_blank" href="https://anaberrocal.com/">Ana Berrocal</a></footer></div>

    </ThemeProvider>
    </div>
   
    
  );
}

export default App;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { render } from '@testing-library/react';


class ProductFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [
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
            }
    }

    render() {
        return(
            <div>
            {<Product product={this.state} />}
            </div>
        );
    }
};

export default ProductFeed;
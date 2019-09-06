import React, { Component } from 'react';
import Title from './Title';

import Products from "./Products";


 

export default class ProductList extends Component {
    render() {
        return (
            <section className="py-5">
              <div className="container">
                <Title title="Product List" center />
              </div>
         
              <Products />
             
            </section>
          )
        }
    }
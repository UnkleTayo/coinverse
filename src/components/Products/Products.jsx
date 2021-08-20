import React from 'react';
import './Product.scss';

import Product from './Product';
const Products = () => {
  return (
    <div className="products">
      <div className="product-category">
        <h2>Sneakers</h2>

        <div className="container">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Products;

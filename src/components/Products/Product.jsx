import React from 'react';
import Pr1 from '../../assets/images/alexa.jpg';

const Product = () => {
  return (
    <div className="p">
      <div className="product">
        <div className="image">
          <picture>
            <img src={Pr1} alt="" />
          </picture>
        </div>

        <div className="info">
          <span className="name">Nike AIR</span>
          <span className="price">$100</span>
        </div>
        <div className="log-info">
          <span className="prodname">Sneaker</span>
          <div className="log">4 left</div>
        </div>
      </div>
      <div className="buttons">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Product;

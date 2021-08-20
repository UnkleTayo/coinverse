import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Brandstore</div>

      <div className="button">
        <button className="login">
          <Link to="/signin">Sign In</Link>
        </button>
        <button className="new-product">Add a new Product</button>
      </div>
    </div>
  );
};

export default Navbar;

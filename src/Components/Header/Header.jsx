import React from 'react';
import './Header.css';
import logo from'../../images/Logo.svg';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
      <nav className='header'>
        <div className="">
             <img src={logo} alt="" />
        </div>
        <div className="">
          <Link to='/'>Home</Link>
             <Link to="order">Order</Link>
             <Link to="order Review">Order Review</Link>
             <Link to="manage Inventory">Manage Inventory</Link>
             <Link to="login">Login</Link>
        </div>
      </nav>
    );
};

export default Header;
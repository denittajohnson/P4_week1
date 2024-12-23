import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/Asssets';

const Navbar = () => {
    

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="search"/>
        <div className="navbar-search-icon">
            <img src={assets.cart_icon} alt="" className="cart" />
            <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar

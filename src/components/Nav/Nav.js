import React from 'react';
import { Link } from 'react-router-dom'; // You need to install react-router-dom for this
import './Nav.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li> {/* Assuming you have a route set up for "/contact" */}
        <li><Link to="/about">About Me</Link></li> {/* Assuming you have a route set up for "/about" */}
      </ul>
    </nav>
  );
};

export default Navigation;

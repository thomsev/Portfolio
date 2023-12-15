import React from 'react';
import { Link } from 'react-router-dom'; 
import './Nav.css';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact</Link></li> 
        <li><Link to="/about">About Me</Link></li> 
      </ul>
    </nav>
  );
};

export default Navigation;

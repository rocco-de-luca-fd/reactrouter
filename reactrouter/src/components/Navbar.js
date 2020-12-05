import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className=" Navbar">
      <h1>sn navbar page</h1>
      <ul className="Links">
        <Link style = {{color:'white'}}to="/">
        <li>Home</li>
        </Link>
        <Link style = {{color:'white'}} to="/about">
        <li>About</li>
        </Link>
        <Link style = {{color:'white'}} to="/contact">
        <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
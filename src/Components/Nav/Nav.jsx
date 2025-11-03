import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

    function Navbar() {
      return (
        <nav>
          <ul>
          <li><Link to="/main">Home</Link></li>
            <li><Link to="/">Water</Link></li>
            <li><Link to="/">Field</Link></li>
          </ul>
        </nav>
      );
    }

    export default Navbar;
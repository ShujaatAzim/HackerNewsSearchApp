import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
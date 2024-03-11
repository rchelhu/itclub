import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function NavBar() {
  return (
    <header className="header">
      <Link to="/" className="logo">IT</Link>
      <div className="navContainer">
        <nav>
          <ul className="navLinks">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/repairs">Repairs</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </nav>
        {/* <div className="search"><input type="text" placeholder="Search"/></div> */}
      </div>
    </header>
  );
}

export default NavBar;
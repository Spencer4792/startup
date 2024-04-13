import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header-container">
      <img src="/assets/GardenHouse.png" alt="Top Banner" className="top-banner" />
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/projects">Our Projects</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/chat">Chat</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

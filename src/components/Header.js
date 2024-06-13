// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">ApexCure</div>
            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/book-now">Book Now</Link>
                <Link className='b' to="/about-us">About Us</Link>
            </nav>
        </header>
    );
}

export default Header;

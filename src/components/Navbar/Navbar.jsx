import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/litcon-logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <div className="logo-placeholder-container">
                        <img src={logo} alt="LITCON Logo" className="official-logo" />
                    </div>
                    <div className="logo-text">

                    </div>
                </Link>
                <div className="nav-links">
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/events" className="nav-item nav-accent">Universe</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

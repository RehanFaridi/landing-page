// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <ul type='none'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Post</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Testimonials</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact </Link></li>
        </ul>
    </nav>
);

export default Navbar;

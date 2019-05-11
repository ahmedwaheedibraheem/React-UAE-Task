import React from 'react';
import '../../Theme/bootstrap.css';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <NavLink to="/" className="navbar-brand">Ecommerce</NavLink>
                <div className="navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" exact className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default navbar;
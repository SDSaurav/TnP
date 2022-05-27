import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <Navbar/>
                    <img className="navbar-logo"/>
                    <a className="navbar-header navbar-brand page-scroll" href="http://bvicam.in/">Bharati Vidyapeeth Institute of
                        Computer Application and Management</a>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navigation;
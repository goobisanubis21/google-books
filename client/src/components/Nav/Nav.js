import React from 'react';
import { Link } from "react-router-dom";
import "./nav.css";


function Nav() {
    return (
        <div>
            <ul id="navBar" className="nav">
                <li id="navTitle">Google Books</li>
                <li className="nav-item" title="Home Page">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-item" title="Your Saved Books">
                    <Link to="/saved">
                        Saved
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav

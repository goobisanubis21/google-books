import React from 'react';
import { Link } from "react-router-dom";


function Nav() {
    return (
        <div>
            <ul className="nav">
                <p>Google Books</p>
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

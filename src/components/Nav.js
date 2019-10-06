import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    console.log("Render happened --> Nav");
    return (
        <nav className="navbar custom-nav" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="navbar-header">Punk Beerz</h1>

                <button className="navbar-burger burger restyle-btn" aria-label="menu" aria-expanded="false" data-target="mobilenavbar">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>

            <div id="mobilenavbar" className="navbar-menu">
                <div className="navbar-end">
                    <Link to="/" className="navbar-item custom-navbar-item"> 
                        Home
                    </Link>

                    <Link to="/favorites" className="navbar-item">
                        Favorites
                    </Link>
                </div>
            </div>
        </nav>
    )
}

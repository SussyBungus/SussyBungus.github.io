import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/comps/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Change link text based on current page
  const navLink = location.pathname === "/about" ? { path: "/", label: "Home" } : { path: "/about", label: "About" };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <Link to="/" className="brand">Sussy Bungus</Link>
        <div className="burger" id="burger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        
        {/* Overlay */}
        <span className={`overlay ${isMenuOpen ? 'is-active' : ''}`} onClick={() => setIsMenuOpen(false)}></span>
        
        {/* Menu */}
        <div className={`menu ${isMenuOpen ? 'is-active' : ''}`} id="menu">
          <ul className="menu-inner">
            <li className="menu-item">
              <Link className="menu-link" to={navLink.path}>{navLink.label}</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

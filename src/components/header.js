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

  // Define navigation links
  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/projects", label: "Projects" },
    // Add more pages easily here
  ];

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <Link to="/" className="brand">Sussy Bungus</Link>
        
        {/* Burger Menu */}
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
            {navLinks
              .filter(link => link.path !== location.pathname) // Hide current page
              .map((link, index) => (
                <li key={index} className="menu-item">
                  <Link className="menu-link" to={link.path}>{link.label}</Link>
                </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

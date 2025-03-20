import React, { useState } from 'react';

function Header() {
  // State to track the menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar container">
        <a href="/" className="brand">Sussy Bungus</a>
        <div className="burger" id="burger" onClick={toggleMenu}>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </div>
        {/* Apply the 'is-active' class conditionally */}
        <span className={`overlay ${isMenuOpen ? 'is-active' : ''}`} onClick={toggleMenu}></span>
        <div className={`menu ${isMenuOpen ? 'is-active' : ''}`} id="menu">
          <ul className="menu-inner">
            <li className="menu-item"><a className="menu-link" href="/">sus</a></li>
            <li className="menu-item"><a className="menu-link" href="/about">about</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

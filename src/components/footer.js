import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/comps/footer.css';

function Footer() {
  useEffect(() => {
    const yearContainer = document.getElementById('copy');

    if (yearContainer) {
      // ✅ Clear any existing content first
      yearContainer.innerHTML = '';

      const yearElement = document.createElement('div');
      const currentYear = new Date().getFullYear();
      const copyrightText = currentYear > 2022 ? `2022 - ${currentYear}` : currentYear;

      yearElement.textContent = `Sussy Bungus © ${copyrightText}`;
      yearContainer.appendChild(yearElement);
    }
  }, []); // Runs only once when the component mounts

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Brand & Address */}
          <div className="footer__addr">
            <h1 className="footer__logo" id="footer-brand">Sussy Bungus</h1>
          </div>

          {/* Social Media Links */}
          <ul className="footer__socials">
            <li><a href="https://instagram.com/sussy_bungus"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.tiktok.com/@sussy_bungus"><i className="fab fa-tiktok"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCjN4pHSgTFXjvz0Dtd6olGA/videos"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      {/* Legal Text */}
      <div className="legal" id="copy"></div>
    </footer>
  );
}

export default Footer;

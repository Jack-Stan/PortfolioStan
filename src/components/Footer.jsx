import React from 'react';
import '../styles/homepage/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Portfolio</h3>
            <p>Creative developer building amazing web experiences.</p>
          </div>
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>Navigatie</h4>
              <ul>
                <li><a href="#about">Over Mij</a></li>
                <li><a href="#skills">Vaardigheden</a></li>
                <li><a href="#projects">Projecten</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="https://github.com/Jack-Stan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="www.linkedin.com/in/stan-verbruggen-67b928198" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
          <p>Designed & Built by JAQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

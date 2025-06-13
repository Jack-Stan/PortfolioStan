import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/homepage/navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Don't show navigation on welcome page
  if (location.pathname === '/') {
    return null;
  }
  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">        <div className="logo">
          <Link to="/home">Portfolio</Link>
        </div>
        
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Over Mij</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Specialisaties</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projecten</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Getuigenissen</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li><a href="/cv.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>CV</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

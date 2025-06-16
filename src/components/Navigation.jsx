import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/homepage/navigation.css';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleCVDownload = () => {
    // Dit zorgt ervoor dat de browser het bestand direct downloadt
    const link = document.createElement('a');
    link.href = '/data/cv/StanVCV.pdf';
    link.download = 'Stan_Verbruggen_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMenuOpen(false);
  };

  // Don't show navigation on welcome page
  if (location.pathname === '/') {
    return null;
  }
  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">        
        <div className="logo">
          <Link to="/home">Portfolio</Link>
        </div>
          <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>          
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>          
          <li><a href="#about" onClick={() => setMenuOpen(false)}>{t('aboutMe')}</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>{t('skills')}</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>{t('projects')}</a></li>          
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t('contact')}</a></li>
          <li><button onClick={handleCVDownload} className="nav-cv-button">{t('cv')}</button></li>
          <li className="toggle-container">
            <ThemeToggle />
            <LanguageToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

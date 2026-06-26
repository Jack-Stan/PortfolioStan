import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/homepage/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Portfolio</h3>
            <p>{t('footerTagline')}</p>
          </div>
          <div className="footer-links">
            <div className="footer-link-group">
              <h4>{t('navigation')}</h4>
              <ul>                <li><a href="#about">{t('aboutMe')}</a></li>
                <li><a href="#skills">{t('skills')}</a></li>
                <li><a href="#projects">{t('projects')}</a></li>
              </ul>
            </div>
            <div className="footer-link-group">              <h4>{t('connect')}</h4>
              <ul>
                <li><a href="https://github.com/Jack-Stan" target="_blank" rel="noopener noreferrer">{t('github')}</a></li>
                <li><a href="https://www.linkedin.com/in/stan-verbruggen-67b928198" target="_blank" rel="noopener noreferrer">{t('linkedin')}</a></li>
                <li><a href="mailto:stanverbruggen@protonmail.com">{t('email')}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio. {t('footerCopyright')}</p>
          <p>{t('designedBy')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

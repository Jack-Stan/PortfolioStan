import React from 'react';
import '../styles/homepage/contact-form.css';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  
  return (
    <div className="contact-form-container">
      <div className="contact-buttons-container">
        <div className="contact-buttons">
          <a 
            href="mailto:stanverbruggensj@protonmail.com" 
            className="contact-button protonmail-button"
            target="_blank"
            rel="noopener noreferrer"
          >            <i className="fas fa-envelope"></i>
            {t('protonmail')}
          </a>
            <a 
            href="https://github.com/Jack-Stan" 
            className="contact-button github-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>            {t('github')}
          </a>
            <a 
            href="https://www.linkedin.com/in/stan-verbruggen-67b928198" 
            className="contact-button linkedin-button"
            target="_blank"
            rel="noopener noreferrer"
          ><i className="fab fa-linkedin-in"></i>
            {t('linkedin')}          </a>
        </div>
        
        <div className="email-display">
          <p>{t('emailLabel')} <span className="email-address">stanverbruggensj@protonmail.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

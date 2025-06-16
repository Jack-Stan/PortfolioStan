import React from 'react';
import '../styles/homepage/contact-form.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <div className="contact-buttons-container">
        <div className="form-explanation">
          <p>Neem contact met mij op via een van de onderstaande opties:</p>
        </div>
        
        <div className="contact-buttons">
          <a 
            href="mailto:stanverbruggensj@protonmail.com" 
            className="contact-button protonmail-button"
            target="_blank"
            rel="noopener noreferrer"
          >            <i className="fas fa-envelope"></i>
            ProtonMail
          </a>
            <a 
            href="https://github.com/Jack-Stan" 
            className="contact-button github-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>            GitHub
          </a>
            <a 
            href="https://www.linkedin.com/in/stan-verbruggen-67b928198" 
            className="contact-button linkedin-button"
            target="_blank"
            rel="noopener noreferrer"
          ><i className="fab fa-linkedin-in"></i>
            LinkedIn          </a>
        </div>
        
        <div className="email-display">
          <p>E-mail: <span className="email-address">stanverbruggensj@protonmail.com</span></p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

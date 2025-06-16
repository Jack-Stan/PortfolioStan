import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'nl';
  
  // Nu is 'nl' eigenlijk Engels en 'en' is Nederlands door de eerdere aanpassingen
  // Dus we passen de labels visueel aan zodat de slider de juiste taal laat zien
  
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'nl' : 'en';
    i18n.changeLanguage(newLanguage);
    // Also update localStorage for compatibility with existing code
    localStorage.setItem('language', newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
  };

  return (
    <div className="language-toggle">
      <div className="language-switch-container">
        <span className={`language-label ${currentLanguage === 'nl' ? 'active' : ''}`}>EN</span>
        <label className="language-switch">
          <input 
            type="checkbox" 
            checked={currentLanguage === 'en'} 
            onChange={toggleLanguage} 
          />
          <span className="slider round"></span>
        </label>
        <span className={`language-label ${currentLanguage === 'en' ? 'active' : ''}`}>NL</span>
      </div>
    </div>
  );
};

export default LanguageToggle;

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'nl' ? 'en' : 'nl';
    i18n.changeLanguage(newLanguage);
    // Also update localStorage for compatibility with existing code
    localStorage.setItem('language', newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
  };

  return (
    <div className="language-toggle">
      <button onClick={toggleLanguage} className="language-toggle-button">
        {currentLanguage === 'nl' ? 'EN' : 'NL'}
      </button>
    </div>
  );
};

export default LanguageToggle;

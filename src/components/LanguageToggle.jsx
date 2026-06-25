import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/LanguageToggle.css';

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language?.startsWith('en') ? 'en' : 'nl';

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'nl' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
  };

  return (
    <div className="language-toggle">
      <div className="language-switch-container">
        <span className={`language-label ${currentLanguage === 'nl' ? 'active' : ''}`}>NL</span>
        <label className="language-switch">
          <input
            type="checkbox"
            checked={currentLanguage === 'en'}
            onChange={toggleLanguage}
          />
          <span className="slider round"></span>
        </label>
        <span className={`language-label ${currentLanguage === 'en' ? 'active' : ''}`}>EN</span>
      </div>
    </div>
  );
};

export default LanguageToggle;

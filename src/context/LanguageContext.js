import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Create a context for language
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();

  // Initialize language from localStorage or default to 'nl'
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'nl';
    i18n.changeLanguage(savedLanguage);
    document.documentElement.setAttribute('lang', savedLanguage);
  }, [i18n]);

  // Function to change language
  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language: i18n.language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguageContext = () => useContext(LanguageContext);

import { useState, useEffect } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'nl');

  useEffect(() => {
    const handleLanguageChange = (event) => {
      if (event.key === 'language') {
        setLanguage(event.newValue);
      }
    };

    window.addEventListener('storage', handleLanguageChange);
    return () => {
      window.removeEventListener('storage', handleLanguageChange);
    };
  }, []);

  // Add a function to change the language that also updates localStorage
  const changeLanguage = (newLanguage) => {
    localStorage.setItem('language', newLanguage);
    setLanguage(newLanguage);
    document.documentElement.setAttribute('lang', newLanguage);
  };

  return { language, changeLanguage };
};

export default useLanguage;

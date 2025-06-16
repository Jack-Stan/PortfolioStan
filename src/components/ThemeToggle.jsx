import React, { useState, useEffect } from 'react';
import '../styles/components/ThemeToggle.css';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggle">
      <input 
        type="checkbox" 
        id="theme-toggle-checkbox" 
        checked={isDarkMode}
        onChange={toggleTheme}
        className="theme-toggle-checkbox"
      />
      <label htmlFor="theme-toggle-checkbox" className="theme-toggle-label">
        <span className="theme-toggle-inner">
          <i className={`theme-icon ${isDarkMode ? 'fas fa-moon' : 'fas fa-sun'}`}></i>
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;

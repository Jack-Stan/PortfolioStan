import React from 'react';
import useTheme from '../hooks/useTheme';
import '../styles/components/ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

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

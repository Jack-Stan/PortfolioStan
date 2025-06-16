import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import { ThreeProvider } from './context/ThreeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import './i18n'; // Import i18n configuration
import './styles/global.css'; // Import global styles first
import './styles/theme.css'; // Import theme styles
import './App.css';

function App() {
  return (
    <ThreeProvider>
      <LanguageProvider>
        <ThemeProvider>
          <Router>
            <div className="App">
              <Navigation />
              <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route 
                  path="/home" 
                  element={<HomePage />} 
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </Router>
        </ThemeProvider>
      </LanguageProvider>
    </ThreeProvider>
  );
}

export default App;

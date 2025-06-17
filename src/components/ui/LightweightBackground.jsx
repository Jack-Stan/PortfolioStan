import React, { memo, useContext, useEffect, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';

// Lightweight background alternative that doesn't use Three.js
const LightweightBackground = memo(({ customStyle = {} }) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -10,
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
      background: isDarkMode 
        ? 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #121212 70%)' 
        : 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f8f9fa 70%)',
      ...customStyle 
    }}>
      {!isMobile && (
        <div className="gradient-dots" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `radial-gradient(${isDarkMode ? '#2a2a2a' : '#e6e6e6'} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          opacity: 0.5,
        }} />
      )}
    </div>
  );
});

export default LightweightBackground;

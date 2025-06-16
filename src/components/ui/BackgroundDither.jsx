import React, { memo, useContext } from 'react';
import Dither from './Dither';
import ThemeContext from '../../context/ThemeContext';

// Reusable background component with consistent styling
// Using memo to prevent unnecessary re-renders
const BackgroundDither = memo(({ customStyle = {} }) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -10,
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa', // Theme-based background color
      ...customStyle 
    }}>
      <Dither
        waveColor={isDarkMode ? [0.2, 0.2, 0.2] : [0.9, 0.9, 0.9]} // Theme-based dither effect
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
    </div>
  );
});

export default BackgroundDither;

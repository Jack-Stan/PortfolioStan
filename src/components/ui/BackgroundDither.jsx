import React from 'react';
import Dither from './Dither';

// Reusable background component with consistent styling
const BackgroundDither = ({ customStyle = {} }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1,
      backgroundColor: '#000', // Black background as base
      ...customStyle    }}>
      <Dither
        waveColor={[0.2, 0.2, 0.2]} // Dark gray for the dither effect
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
};

export default BackgroundDither;

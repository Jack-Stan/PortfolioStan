import React, { useState, useEffect } from 'react';
import BackgroundDither from './BackgroundDither';
import LightweightBackground from './LightweightBackground';

// Performance settings that can be adjusted
const PERFORMANCE_THRESHOLD = {
  MOBILE_ALWAYS_LIGHTWEIGHT: true,    // Always use lightweight on mobile
  MEMORY_THRESHOLD: 4,                // GB of RAM threshold
  FPS_THRESHOLD: 40                   // FPS threshold to switch to lightweight
};

const BackgroundSelector = ({ customStyle = {} }) => {
  const [useLightweight, setUseLightweight] = useState(false);
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    // Check device capabilities on first render
    const checkPerformance = () => {
      // Check if mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
      
      // If mobile and MOBILE_ALWAYS_LIGHTWEIGHT is true, use lightweight
      if (isMobile && PERFORMANCE_THRESHOLD.MOBILE_ALWAYS_LIGHTWEIGHT) {
        setUseLightweight(true);
        setChecked(true);
        return;
      }
      
      // Try to estimate available memory (not supported in all browsers)
      let hasLowMemory = false;
      if (navigator.deviceMemory) {
        hasLowMemory = navigator.deviceMemory < PERFORMANCE_THRESHOLD.MEMORY_THRESHOLD;
      }
      
      // If we detect low memory, use lightweight
      if (hasLowMemory) {
        setUseLightweight(true);
        setChecked(true);
        return;
      }
      
      // Otherwise start with full version and monitor performance
      setUseLightweight(false);
      setChecked(true);
      
      // Set up FPS monitoring
      let lastTime = performance.now();
      let frames = 0;
      let fps = 60;
      
      const checkFps = () => {
        frames++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime > 1000) {
          fps = frames;
          frames = 0;
          lastTime = currentTime;
          
          // If FPS drops below threshold, switch to lightweight
          if (fps < PERFORMANCE_THRESHOLD.FPS_THRESHOLD && !useLightweight) {
            setUseLightweight(true);
          }
        }
        
        // Only continue monitoring if still using full version
        if (!useLightweight) {
          requestAnimationFrame(checkFps);
        }
      };
      
      // Start monitoring FPS
      requestAnimationFrame(checkFps);
    };
    
    checkPerformance();
  }, [useLightweight]);
  
  // Return loading placeholder until check is complete
  if (!checked) {
    return (
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -10,
        backgroundColor: '#121212',
        ...customStyle 
      }} />
    );
  }
  
  // Return appropriate background based on performance check
  return useLightweight ? 
    <LightweightBackground customStyle={customStyle} /> : 
    <BackgroundDither customStyle={customStyle} />;
};

export default BackgroundSelector;

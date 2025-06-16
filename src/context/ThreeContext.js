import React, { createContext, useState, useContext, useEffect } from 'react';
import * as THREE from 'three';

// Create a context to share the Three.js instance across components
export const ThreeContext = createContext();

export const ThreeProvider = ({ children }) => {
  // Create a shared Three.js renderer instance
  const [renderer, setRenderer] = useState(null);
  
  useEffect(() => {
    // Only create the renderer once
    if (!renderer) {
      // Create a renderer with optimal settings
      const newRenderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: 'high-performance',
        alpha: true,
      });
      
      // Set renderer properties
      newRenderer.setSize(window.innerWidth, window.innerHeight);
      newRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Handle window resize
      const handleResize = () => {
        if (newRenderer) {
          newRenderer.setSize(window.innerWidth, window.innerHeight);
        }
      };
      
      window.addEventListener('resize', handleResize);
      
      // Save the renderer to state
      setRenderer(newRenderer);
      
      // Cleanup on unmount
      return () => {
        window.removeEventListener('resize', handleResize);
        if (newRenderer) {
          newRenderer.dispose();
        }
      };
    }
  }, [renderer]);
  
  return (
    <ThreeContext.Provider value={{ renderer }}>
      {children}
    </ThreeContext.Provider>
  );
};

// Custom hook to use the Three.js context
export const useThreeContext = () => useContext(ThreeContext);

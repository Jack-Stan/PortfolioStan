import React, { useState, useEffect, useRef } from 'react';
import FuzzyText from './FuzzyText';

const TypewriterFuzzy = ({ 
  text, 
  delay = 100, 
  onComplete = () => {},
  fontSize = "clamp(2rem, 5vw, 4rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  baseIntensity = 0.2,
  hoverIntensity = 0.5,
  enableHover = true
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      
      // Wacht even voordat de cursor verdwijnt en onComplete wordt aangeroepen
      setTimeout(() => {
        setShowCursor(false);
        onComplete();
      }, 500);
    }
  }, [currentIndex, delay, text, isComplete, onComplete]);
  // Render een cursor naast de FuzzyText tijdens het typen
  return (
    <div className="typewriter-fuzzy-container">
      <div style={{ position: 'relative' }}>
        <FuzzyText
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontFamily={fontFamily}
          color={color}
          enableHover={enableHover}
          baseIntensity={baseIntensity}
          hoverIntensity={hoverIntensity}
        >
          {currentText}
        </FuzzyText>
        {showCursor && <span className="typing-cursor">|</span>}
      </div>
    </div>
  );
};

export default TypewriterFuzzy;

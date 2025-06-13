import React, { useState, useEffect } from 'react';

const TypeWriter = ({ 
  text, 
  delay = 100, 
  onComplete = () => {}, 
  className = '' 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      onComplete();
    }
  }, [currentIndex, delay, text, isComplete, onComplete]);

  return (
    <span className={`${className}${isComplete ? ' typing-complete' : ''}`}>
      {currentText}
    </span>
  );
};

export default TypeWriter;

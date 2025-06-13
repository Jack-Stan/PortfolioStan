import React, { useEffect, useRef, useState } from 'react';
import '../styles/homepage/skill-bar.css';

const SkillBar = ({ skill, percentage, color = '#4a89dc' }) => {
  const [animate, setAnimate] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  return (
    <div className="skill-bar" ref={skillRef}>
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-progress">
        <div 
          className={`skill-progress-bar ${animate ? 'animate' : ''}`} 
          style={{ 
            width: animate ? `${percentage}%` : '0%',
            backgroundColor: color
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;

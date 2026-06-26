import React, { useEffect, useRef, useState } from 'react';
import '../styles/homepage/skill-bar.css';

// Qualitative levels instead of a fake precision percentage — nobody is "87% at React".
const LEVEL_WIDTH = {
  'Daily driver': 95,
  'Dagelijkse tool': 95,
  'Confident': 80,
  'Zelfverzekerd': 80,
  'Comfortable': 60,
  'Comfortabel': 60,
  'Growing': 40,
  'Groeiend': 40,
};

const SkillBar = ({ skill, level, color = '#4a89dc' }) => {
  const [animate, setAnimate] = useState(false);
  const skillRef = useRef(null);
  const width = LEVEL_WIDTH[level] ?? 70;

  useEffect(() => {
    const node = skillRef.current;
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

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div className="skill-bar" ref={skillRef}>
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{level}</span>
      </div>
      <div className="skill-progress">
        <div
          className={`skill-progress-bar ${animate ? 'animate' : ''}`}
          style={{
            width: animate ? `${width}%` : '0%',
            backgroundColor: color
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;

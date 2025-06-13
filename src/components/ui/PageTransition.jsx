import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/page-transition.css';

const PageTransition = ({ children, location }) => {
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');
  const pageRef = useRef(null);

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 500); // Match this with the CSS transition time
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeIn' && pageRef.current) {
      // Animate content from bottom to top
      gsap.fromTo(pageRef.current, 
        { 
          y: 100, 
          opacity: 0 
        }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out" 
        }
      );
    }
  }, [transitionStage]);

  return (
    <div
      ref={pageRef}
      className={`page-transition ${transitionStage}`}
    >
      {children}
    </div>
  );
};

export default PageTransition;

import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import FuzzyText from "../components/ui/FuzzyText";
import TypewriterFuzzy from "../components/ui/TypewriterFuzzy";
import BackgroundDither from "../components/ui/BackgroundDither";
import "../styles/welcomepage/welcome-page.css";
import "../styles/welcomepage/page-transition.css";

const WelcomePage = () => {
  const navigate = useNavigate();
  const [typingComplete, setTypingComplete] = useState(false);
  // Removed unused state variable hoverIntensity
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pageRef = useRef(null);
  const contentRef = useRef(null);
  const handleScrollDown = () => {
    setIsTransitioning(true);
    
    // Animation from bottom to top (page slide up)
    const tl = gsap.timeline({
      onComplete: () => {
        // Navigate to home after animation
        setTimeout(() => {
          navigate("/home", { state: { from: 'welcome' } });
        }, 100);
      }
    });
    
    // Fade out current content
    tl.to(contentRef.current, {
      y: -50, // Reduced for better mobile experience
      opacity: 0,
      duration: 0.4, // Slightly faster for mobile
      ease: "power2.in"
    });
    
    // Slide the new page in from below
    tl.to(pageRef.current, {
      y: "-100vh",
      duration: 0.7, // Slightly faster for mobile
      delay: 0.05, // Reduced delay for mobile
      ease: "power3.inOut"
    }, "-=0.2");
  };

  const handleTypingComplete = () => {
    setTypingComplete(true);
  };

  // Effect voor initiële animatie
  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <div className="welcome-page" ref={pageRef} style={{ position: 'relative' }}>
      {/* Dither background */}
      <BackgroundDither />

      <div className="content" ref={contentRef}>
        {typingComplete ? (
          <div className="title-container">
            <FuzzyText 
              baseIntensity={0.2} 
              hoverIntensity={0.5} 
              enableHover={true}
              fontSize="clamp(2.5rem, 8vw, 4.5rem)" // Aangepast voor grotere tekst op mobiel
              color="#fff"
            >
              Stan's Portfolio
            </FuzzyText>
          </div>
        ) : (
          <div className="title-container">
            <TypewriterFuzzy 
              text="Stan's Portfolio" 
              delay={100} 
              onComplete={handleTypingComplete} 
              baseIntensity={0.2}
              hoverIntensity={0.5}
              enableHover={true}
              fontSize="clamp(2.5rem, 8vw, 4.5rem)" // Aangepast voor grotere tekst op mobiel
              color="#fff"
            />
          </div>
        )}
        <div className="scroll-button" onClick={handleScrollDown}>
          <div className="scroll-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Transitie overlay voor animatie */}
      {isTransitioning && (
        <div className="page-transition-overlay"></div>
      )}
    </div>
  );
};

export default WelcomePage;

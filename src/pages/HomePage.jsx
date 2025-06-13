import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "../styles/homepage/home-page.css";
import "../styles/welcomepage/page-transition.css";
import "../styles/homepage/ProfileCard.css";
import "../styles/homepage/profile-card-override.css";
import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import TypeWriter from "../components/ui/TypeWriter";
import FuzzyText from "../components/ui/FuzzyText";
import ProfileCard from "../components/ui/ProfileCard";
import BackgroundDither from "../components/ui/BackgroundDither";

// Placeholder images - replace with your actual project images
const projectImage1 = "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const projectImage2 = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
const projectImage3 = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

const HomePage = () => {
  const sectionsRef = useRef([]);
  const homePageRef = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    // Controleren of we van de welkomstpagina komen en een inkomende animatie uitvoeren
    const fromWelcome = location.state?.from === 'welcome';
    
    if (homePageRef.current) {
      // Initiële staat instellen buiten het scherm
      if (fromWelcome) {
        gsap.set(homePageRef.current, { 
          y: "100vh", 
          opacity: 1 
        });
      } else {
        gsap.set(homePageRef.current, { 
          y: 0, 
          opacity: 0 
        });
      }
      
      // Animatie
      if (fromWelcome) {
        // Animatie van onder naar boven
        gsap.to(homePageRef.current, {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1
        });
      } else {
        // Standaard fade-in
        gsap.to(homePageRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    }
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Scroll reveal animation
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    // Store the current sections ref value to avoid stale closures in the cleanup function
    const currentSections = sectionsRef.current;
    
    // Add all sections to observer
    currentSections.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => {
      // Use the stored sections value in the cleanup
      currentSections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [location.state]);

  return (
    <div style={{ position: 'relative' }}>
      {/* Dither background */}
      <BackgroundDither />
      
      <div className="home-page" ref={homePageRef}>
        <div className="home-content">
          <header className="home-header" id="top">
            <h1>
              <FuzzyText fontSize="3.5rem" color="#fff">Mijn Portfolio</FuzzyText>
            </h1>
            <p>
              <TypeWriter 
                text="Creatieve ontwikkelaar gespecialiseerd in interactieve web ervaringen" 
                delay={50}
              />
              <span className="typing-cursor"></span>
            </p>
            <div className="header-cta">
              <a href="#projects" className="cta-button">Bekijk mijn werk</a>
              <a href="#contact" className="cta-button secondary">Neem contact op</a>
            </div>
          </header>
        
          <section 
            className="about-section" 
            id="about" 
            ref={el => sectionsRef.current[0] = el}
          >
            <div className="section-header">
              <h2>Over Mij</h2>
              <div className="section-divider"></div>
            </div>
            <div className="about-content">
              <div className="about-image">
                {/* Profile Card Component */}
                <div className="profile-card-section">
                  <ProfileCard 
                    name="Stan Verbruggen"
                    title="Full-Stack Developer"
                    handle="Jack-Stan"
                    status="Available for work"
                    contactText="Contact Me"
                    avatarUrl="/images/profile.jpg"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => {
                      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                </div>
              </div>
              <div className="about-text">
                <p>
                  Mijn naam is Stan Verbruggen, een 22-jarige programmeur uit België in het laatste jaar van mijn opleiding Programmeren aan Hogeschool Gent. Ik heb meer dan 4 jaar ervaring in softwareontwikkeling, met een focus op creatief en efficiënt bouwen van digitale oplossingen.
                </p>
                <p>
                  Ik specialiseer me in full-stack development, met ervaring in C#, JavaScript, React, Flutter, MySQL, Firestore en Tailwind CSS. Mijn kracht ligt in het combineren van functionele toepassingen met sterke visuele vormgeving.
                </p>
                <div className="about-buttons">
                  <a href="#contact" className="about-button">Contact opnemen</a>
                  <a href="/cv.pdf" className="about-button secondary" target="_blank" rel="noopener noreferrer">Download CV</a>
                </div>
              </div>
            </div>
          </section>
          
          <section 
            className="skills-section" 
            id="skills"
            ref={el => sectionsRef.current[1] = el}
          >
            <div className="section-header">
              <h2>Mijn Vaardigheden</h2>
              <div className="section-divider"></div>
            </div>
            <div className="skills-content">
              <div className="skills-column">
                <h3>Frontend</h3>
                <SkillBar skill="HTML/CSS" percentage={90} color="#E44D26" />
                <SkillBar skill="JavaScript" percentage={85} color="#F7DF1E" />
                <SkillBar skill="React" percentage={80} color="#61DAFB" />
                <SkillBar skill="TypeScript" percentage={75} color="#3178C6" />
              </div>
              <div className="skills-column">
                <h3>Backend</h3>
                <SkillBar skill="Node.js" percentage={75} color="#68A063" />
                <SkillBar skill="Express" percentage={70} color="#000000" />
                <SkillBar skill="MongoDB" percentage={65} color="#47A248" />
                <SkillBar skill="RESTful APIs" percentage={80} color="#005A9C" />
              </div>
              <div className="skills-column">
                <h3>Tools & Other</h3>
                <SkillBar skill="Git/GitHub" percentage={85} color="#F05032" />
                <SkillBar skill="Figma" percentage={70} color="#F24E1E" />
                <SkillBar skill="Responsive Design" percentage={90} color="#38B2AC" />
                <SkillBar skill="UI/UX Principles" percentage={75} color="#FF61F6" />
              </div>
            </div>
          </section>
          
          <section 
            className="projects-section" 
            id="projects"
            ref={el => sectionsRef.current[2] = el}
          >
            <div className="section-header">
              <h2>Mijn Projecten</h2>
              <div className="section-divider"></div>
            </div>
            <div className="projects-grid">
              <ProjectCard 
                title="Time2Bill"
                description="Een zelfontwikkelde webapplicatie voor facturatie en tijdregistratie, gebouwd in Flutter met Firebase Firestore als backend. Bevat o.a. factuuroverzicht, filters, PDF-generatie, gebruikersauthenticatie, caching, en een informatieve landingspagina in React."
                imageUrl={projectImage1}
                technologies={["Flutter", "Firebase", "Firestore", "React"]}
                liveUrl="https://time2bill.example.com"
                repoUrl="https://github.com/Jack-Stan/time2bill"
              />
              <ProjectCard 
                title="PurePeau Website"
                description="Een moderne, responsive bedrijfswebsite voor een huidverzorgingspraktijk, gebouwd in React + Tailwind CSS, met aandacht voor branding, toegankelijkheid en SEO."
                imageUrl={projectImage2}
                technologies={["React", "Tailwind CSS", "Responsive Design", "SEO"]}
                liveUrl="https://purepeau.example.com"
                repoUrl="https://github.com/Jack-Stan/purepeau"
              />
              <ProjectCard 
                title="JAQ AI"
                description="Een experimenteel project waarin ik AI-tools inzet voor dagelijkse assistentie. Ik gebruik Python als basis om een digitale assistent te ontwikkelen die onder meer spraak en automatisering combineert."
                imageUrl={projectImage3}
                technologies={["Python", "AI", "Spraakherkenning", "Automatisering"]}
                liveUrl="https://jaqai.example.com"
                repoUrl="https://github.com/Jack-Stan/jaqai"
              />
            </div>
            <div className="projects-more">
              <a href="https://github.com/Jack-Stan" className="more-button" target="_blank" rel="noopener noreferrer">
                Bekijk meer op GitHub
              </a>
            </div>
          </section>
          
          <section 
            className="contact-section" 
            id="contact"
            ref={el => sectionsRef.current[3] = el}
          >
            <div className="section-header">
              <h2>Contact</h2>
              <div className="section-divider"></div>
            </div>
            <div className="contact-content">
              <div className="contact-text">
                <p>Heb je een vraag of wil je samenwerken aan een project? Neem gerust contact met me op!</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:stanverbruggen@protonmail.com">stanverbruggen@protonmail.com</a>
                  </div>
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <a href="https://www.linkedin.com/in/stan-verbruggen-67b928198" target="_blank" rel="noopener noreferrer">LinkedIn Profiel</a>
                  </div>
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <a href="https://github.com/Jack-Stan" target="_blank" rel="noopener noreferrer">GitHub Profiel</a>
                  </div>
                </div>
              </div>
              <div className="contact-form-container">
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Naam</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Bericht</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="submit-button">Verstuur Bericht</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

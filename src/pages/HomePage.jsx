import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import "../styles/homepage/home-page.css";
import "../styles/welcomepage/page-transition.css";
import "../styles/homepage/ProfileCard.css";
import "../styles/homepage/profile-card-override.css";
import "../styles/homepage/decrypted-text.css";
import "../styles/homepage/projects-chroma.css";
import "../styles/homepage/project-section-divider.css";
import SkillBar from "../components/SkillBar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import TypeWriter from "../components/ui/TypeWriter";
import FuzzyText from "../components/ui/FuzzyText";
import ProfileCard from "../components/ui/ProfileCard";
import BackgroundDither from "../components/ui/BackgroundDither";
import ProjectDetail from "../components/ui/ProjectDetail";
import DecryptedText from "../components/ui/DecryptedText";
import ProjectsChroma from "../components/section/ProjectsChroma";
import CVDownloadButton from "../components/CVDownloadButton";
import ContactForm from "../components/ContactForm";
import projectsData from "../data/projectsData";
import { aboutContent, skillsContent, projectsTranslations } from "../data/translations-content";

const HomePage = () => {
  const sectionsRef = useRef([]);
  const homePageRef = useRef(null);
  const location = useLocation();
  const [selectedProject, setSelectedProject] = useState(null);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'nl';

  // Get the appropriate projects data and translations based on the current language
  const localizedProjects = projectsData[currentLanguage] || projectsData.en;
  const localizedAbout = aboutContent[currentLanguage] || aboutContent.en;
  const localizedSkills = skillsContent[currentLanguage] || skillsContent.en;
  const localizedProjectsText = projectsTranslations[currentLanguage] || projectsTranslations.en;
  
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

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Background dither effect */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <BackgroundDither />
      </div>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={handleCloseDetail}
        />
      )}
      
      <div className="home-page" ref={homePageRef}>
        <div className="home-content">
          <section 
            className="about-section" 
            id="about" 
            ref={el => sectionsRef.current[0] = el}
          >
            <div className="section-header">
              <h2>{t('aboutMe')}</h2>
              <div className="section-divider"></div>
            </div>
            <div className="about-content">
              <div className="about-image">
                {/* Profile Card Component */}
                <div className="profile-card-section">
                  <ProfileCard 
                    name=""
                    title=""
                    avatarUrl="/data/photo/stanpffoto.png"
                    handle="Jack-Stan"
                    status="Available for work"
                    contactText={t('downloadCV')}
                    showUserInfo={false}
                    enableTilt={true}
                    showBehindGradient={false}
                    onContactClick={() => {
                      // Download CV in plaats van naar contact sectie scrollen
                      const link = document.createElement('a');
                      link.href = '/data/cv/StanVCV.pdf';
                      link.download = 'Stan_Verbruggen_CV.pdf';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  />
                </div>
              </div>
              <div className="about-text">
                <h3 className="about-name">
                  <DecryptedText 
                    text="Stan Verbruggen" 
                    animateOn="view" 
                    sequential={true} 
                    speed={50}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </h3>
                <h4 className="about-title">
                  <DecryptedText 
                    text="Full-Stack Developer" 
                    animateOn="view" 
                    sequential={true} 
                    speed={80}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                    revealDirection="end"
                  />
                </h4>
                <p>
                  <DecryptedText 
                    text={localizedAbout.aboutIntro}
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <p>
                  <DecryptedText 
                    text={localizedAbout.aboutStrengths}
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <p>
                  <DecryptedText 
                    text={localizedAbout.aboutTeamwork}
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <p>
                  <DecryptedText 
                    text={localizedAbout.aboutProjects}
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <p>
                  <DecryptedText 
                    text={localizedAbout.aboutGoals}
                    animateOn="view" 
                    sequential={false} 
                    maxIterations={15}
                    speed={30}
                    className="text-revealed"
                    encryptedClassName="text-encrypted"
                  />
                </p>
                <div className="about-buttons">
                  <CVDownloadButton className="about-button" />
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
              <h2>{localizedSkills.sectionTitle}</h2>
              <div className="section-divider"></div>
            </div>
            <div className="skills-intro">
              <p>{localizedSkills.sectionIntro}</p>
            </div>
            <div className="skills-content">
              <div className="skills-column">
                <h3>{localizedSkills.coreTitle}</h3>
                <SkillBar skill="React Frontend Development" percentage={90} color="#61DAFB" />
                <SkillBar skill="JavaScript Ecosysteem" percentage={85} color="#F7DF1E" />
                <SkillBar skill="TypeScript" percentage={85} color="#3178C6" />
                <div className="skill-description">
                  <p>{localizedSkills.skillDescription}</p>
                  <p><strong>{localizedSkills.projectExample}</strong></p>
                </div>
              </div>
              <div className="skills-column">
                <h3>{localizedSkills.supportTitle}</h3>
                <SkillBar skill="Node.js Backend" percentage={75} color="#68A063" />
                <SkillBar skill="Flutter" percentage={70} color="#02569B" />
                <SkillBar skill="Firebase & Cloud Services" percentage={75} color="#FFCA28" />
                <SkillBar skill="C#" percentage={65} color="#9B4F96" />
                <div className="skill-description">
                  <p>{localizedSkills.supportDescription}</p>
                </div>
              </div>              <div className="skills-column">
                <h3>{localizedSkills.professionalTitle}</h3>
                <SkillBar skill={t('problemSolving', 'Probleemoplossend vermogen')} percentage={95} color="#e74c3c" />
                <SkillBar skill="UI/UX Design" percentage={75} color="#f1c40f" />
                <SkillBar skill={t('codeQuality', 'Code Kwaliteit & Testing')} percentage={75} color="#f1c40f" />
                <SkillBar skill={t('agileMethodology', 'Agile Methodologie')} percentage={50} color="#2ecc71" />
                <div className="skill-description">
                  <p>{localizedSkills.professionalDescription}</p>
                </div>
              </div>
            </div>
          </section>
          
          <section 
            className="projects-section" 
            id="projects"
            ref={el => sectionsRef.current[2] = el}
          >
            <div className="section-header">
              <h2>{localizedProjectsText.sectionTitle}</h2>
              <div className="section-divider"></div>
            </div>
            <div className="projects-intro">
              <p>{localizedProjectsText.sectionDescription}</p>
            </div>
            
            {/* ChromaGrid Project Display */}
            <ProjectsChroma 
              handleProjectSelect={setSelectedProject} 
              projectsData={localizedProjects}
            />
            
            <div className="projects-more">
              <a href="https://github.com/Jack-Stan" className="more-button" target="_blank" rel="noopener noreferrer">
                {localizedProjectsText.viewMoreOnGithub}
              </a>
            </div>
          </section>
          
          <section 
            className="contact-section" 
            id="contact"
            ref={el => sectionsRef.current[3] = el}
          >
            <div className="section-header">
              <h2>{t('contact')}</h2>
              <div className="section-divider"></div>
            </div>
            <div className="contact-intro">
              <p>{t('contactMeIntro', 'Neem contact met mij op via een van de onderstaande opties:')}</p>
            </div>
            
            {/* Contactformulier met de drie knoppen */}
            <div className="contact-content">
              {/* Import ContactForm component here */}
              <ContactForm />
            </div>
          </section>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

// Translation dictionary
const translations = {
  en: {
    aboutMe: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'CV',
    contactIntro: 'Feel free to contact me through any of the following channels:',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    protonmail: 'ProtonMail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    emailLabel: 'Email:',
    downloadCV: 'Download CV',
    // Add more translations as needed
  },
  nl: {
    aboutMe: 'Over Mij',
    skills: 'Specialisaties',
    projects: 'Projecten',
    contact: 'Contact',
    cv: 'CV',
    contactIntro: 'Neem gerust contact met mij op via een van de volgende kanalen:',
    name: 'Naam',
    email: 'E-mail',
    message: 'Bericht',
    send: 'Versturen',
    protonmail: 'ProtonMail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    emailLabel: 'E-mail:',
    downloadCV: 'Download CV',
    // Add more translations as needed
  }
};

// This function is kept for backward compatibility
export const getTranslation = (key, language = 'nl') => {
  return translations[language][key] || key;
};

export default translations;

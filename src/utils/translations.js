// Translation dictionary
const translations = {
  nl: {
    aboutMe: 'Over mij',
    skills: 'Specialisaties',
    projects: 'Projecten',
    contact: 'Contact',
    cv: 'CV',
    contactIntro: 'Neem gerust contact met mij op via een van de volgende kanalen:',
    contactMeIntro: 'Neem gerust contact met mij op via een van de volgende kanalen:',
    name: 'Naam',
    email: 'E-mail',
    message: 'Bericht',
    send: 'Versturen',
    protonmail: 'ProtonMail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    emailLabel: 'E-mail:',
    downloadCV: 'Download CV',
    problemSolving: 'Probleemoplossend vermogen',
    codeQuality: 'Test Automation & QA',
    agileMethodology: 'Agile methodologie',
    footerTagline: 'Full-stack developer die graag ideeën omzet in werkende software.',
    navigation: 'Navigatie',
    connect: 'Connect',
    footerCopyright: 'Alle rechten voorbehouden.',
    designedBy: 'Ontworpen & gebouwd door Stan Verbruggen',
  },
  en: {
    aboutMe: 'About me',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    cv: 'CV',
    contactIntro: 'Feel free to contact me through any of the following channels:',
    contactMeIntro: 'Feel free to contact me through any of the following channels:',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    protonmail: 'ProtonMail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    emailLabel: 'Email:',
    downloadCV: 'Download CV',
    problemSolving: 'Problem solving',
    codeQuality: 'Test Automation & QA',
    agileMethodology: 'Agile methodology',
    footerTagline: 'Full-stack developer who loves turning ideas into working software.',
    navigation: 'Navigation',
    connect: 'Connect',
    footerCopyright: 'All rights reserved.',
    designedBy: 'Designed & Built by Stan Verbruggen',
  }
};

// This function is kept for backward compatibility
export const getTranslation = (key, language = 'nl') => {
  return translations[language][key] || key;
};

export default translations;

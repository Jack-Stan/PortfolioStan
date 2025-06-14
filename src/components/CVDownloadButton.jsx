import React from 'react';

const CVDownloadButton = () => {
  const handleDownload = () => {
    // Optioneel: voeg hier analytics toe
    console.log('CV download gestart');
    
    // Dit zorgt ervoor dat de browser het bestand direct downloadt
    const link = document.createElement('a');
    link.href = '/data/cv/StanVCV.pdf';
    link.download = 'Stan_Verbruggen_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button 
      onClick={handleDownload}
      className="about-button secondary"
      style={{ cursor: 'pointer' }}
    >
      Download CV
    </button>
  );
};

export default CVDownloadButton;

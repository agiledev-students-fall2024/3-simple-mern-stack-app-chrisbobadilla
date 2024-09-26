import React, { useState, useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5002/aboutUs') 
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched data:', data); 
        setAboutData(data.about);
      })
      .catch((err) => {
        console.error('Error fetching About Us data:', err);
      });
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      {aboutData.name && (
        <div>
          <h2>{aboutData.name}</h2>
          <p>{aboutData.description}</p>
          {aboutData.image && <img src={aboutData.image} alt="About Me" />}
        </div>
      )}
    </div>
  );
};

export default AboutUs;

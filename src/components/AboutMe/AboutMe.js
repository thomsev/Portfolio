import React from 'react';
import { FaLinkedin, FaClock, FaMapMarkerAlt, FaGithub } from 'react-icons/fa'; 
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h1>Thomas Severinsen</h1>
      <p>28 years old. 2 year into HTML, CSS, and JavaScript.</p>
      <p>Currently working on my React skills with bootstrap mainly.</p>
      <p>Student at Noroff Frontend Development.</p>

      <div className="social-info">
        <p><FaGithub /> thomsev</p>
        <p><FaLinkedin /> <a href="https://www.linkedin.com/in/thomas-severinsen-36b4a71b0/" target="_blank" rel="noopener noreferrer">Thomas Severinsen on LinkedIn</a></p>
        <p><FaMapMarkerAlt /> Kopervik, Norway</p>
        <p><FaClock /> Local Time: 00:23 (UTC -12:00)</p>
      </div>

      <div className="followers-info">
        <p>0 followers · 2 following</p>
      </div>
    </div>
  );
};

export default AboutMe;

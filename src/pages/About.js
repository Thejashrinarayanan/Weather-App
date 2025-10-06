import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Weather App</h1>
        <p>
          The Weather App was created by <strong>Thejashri Narayanan</strong> to help users track live weather updates for any city in the world. 
          It features dynamic backgrounds, recent search history, and a mobile-friendly design.
        </p>

        <div className="features">
          <div className="feature-card">
            <h3>Dynamic Backgrounds</h3>
            <p>The app changes its background automatically depending on the current weather conditions.</p>
          </div>
          <div className="feature-card">
            <h3>Search History</h3>
            <p>Quickly access your last 5 searched cities with a single click.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive Design</h3>
            <p>Optimized for mobile and desktop with a smooth, app-like experience.</p>
          </div>
        </div>

        <div className="contact-section">
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:thejashrinarayanan@gmail.com">thejashrinarayanan@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/Thejashrinarayanan" target="_blank" rel="noreferrer">github.com/Thejashrinarayanan</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;

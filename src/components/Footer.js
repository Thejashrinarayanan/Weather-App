import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // We'll create this for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About</h4>
          <p>
            Get instant weather updates in any city with visually dynamic backgrounds that reflect current conditions.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="mailto:thejashrinarayanan@gmail.com">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:thejashrinarayanan@gmail.com">thejashrinarayanan@gmail.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Thejashri Narayanan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

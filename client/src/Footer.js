import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        {/* Left Column */}
        <div className="footer-column">
          <h4>Global Development<br />and Design</h4>
          <p>
            FIRE Global Development & Design explores what ethical development
            around the world really means and needs. We look at the
            values-based differences between “good” and “bad” development and
            the technological and design tools that can help improve
            development programs.
          </p>
        </div>

        {/* Center Column - Quick Links */}
        <div className="footer-column centered">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#">Ethics Canvas</a></li>
            <li><a href="#">Worthwhile Development</a></li>
            <li><a href="#">Development Ethics</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>

        {/* Right Column - Helps */}
        <div className="footer-column">
          <h5>Helps</h5>
          <ul>
            <li><a href="#">AI Assistant</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

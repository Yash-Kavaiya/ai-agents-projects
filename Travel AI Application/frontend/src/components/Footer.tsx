import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About AI Travel Planner</h3>
          <p>
            We use advanced AI agents to create personalized travel plans based on your preferences.
            Our system analyzes thousands of destinations to find the perfect match for you.
          </p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/planner">Plan A Trip</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>
            <a href="mailto:contact@aitravelplanner.com">contact@aitravelplanner.com</a>
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AI Travel Planner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
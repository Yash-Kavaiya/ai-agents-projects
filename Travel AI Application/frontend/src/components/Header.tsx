import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>
              <span className="logo-icon">✈️</span>
              <span className="logo-text">AI Travel Planner</span>
            </h1>
          </Link>
        </div>
        
        <nav className="main-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/planner">Plan A Trip</Link>
            </li>
            <li>
              <a href="https://github.com/yourusername/travel-ai-planner" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
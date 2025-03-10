import React from 'react';
import { Link } from 'react-router-dom';
// Force file to be treated as a module
export {};

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Intelligent Travel Planning with AI</h1>
          <p className="hero-subtitle">
            Let our AI agents create personalized travel experiences tailored to your preferences
          </p>
          <Link to="/planner" className="cta-button">
            Plan Your Trip
          </Link>
        </div>
        <div className="hero-image">
          {/* This would be a placeholder or vector graphic in a real app */}
          <div className="placeholder-image">
            <span className="emoji-graphic">✈️ 🌎 🗺️ 🏙️</span>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Share Your Preferences</h3>
            <p>Tell us about your travel style, interests, season, duration, and budget.</p>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>AI Analyzes Options</h3>
            <p>Our intelligent agents work together to find perfect destinations and activities for you.</p>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Get Your Personalized Plan</h3>
            <p>Review a complete travel plan with destinations, itinerary, and budget breakdown.</p>
          </div>
        </div>
      </section>
      
      {/* AI Agents Section */}
      <section className="ai-agents-section">
        <h2>Meet Your AI Travel Team</h2>
        <div className="agents-container">
          <div className="agent-card">
            <div className="agent-icon">🌍</div>
            <h3>City Selection Expert</h3>
            <p>Identifies the best destinations based on your preferences, travel history, and current trends.</p>
          </div>
          
          <div className="agent-card">
            <div className="agent-icon">🏛️</div>
            <h3>Local Destination Expert</h3>
            <p>Provides insider knowledge about local attractions, customs, and hidden gems in each city.</p>
          </div>
          
          <div className="agent-card">
            <div className="agent-icon">📅</div>
            <h3>Travel Planner</h3>
            <p>Creates optimized day-by-day itineraries with perfect timing and logistics.</p>
          </div>
          
          <div className="agent-card">
            <div className="agent-icon">💰</div>
            <h3>Budget Manager</h3>
            <p>Optimizes your travel spending to maximize experiences while respecting your budget.</p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Travelers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p className="quote">"The AI created a perfect itinerary for my family trip to Japan. We discovered places we never would have found on our own!"</p>
            <p className="author">- Sarah T.</p>
          </div>
          
          <div className="testimonial">
            <p className="quote">"As a budget traveler, I was amazed at how well the system optimized my expenses while still giving me an incredible experience in Europe."</p>
            <p className="author">- Michael R.</p>
          </div>
          
          <div className="testimonial">
            <p className="quote">"The local insights were spot-on! I felt like I had a knowledgeable local friend in every city I visited."</p>
            <p className="author">- Priya K.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Experience AI-Powered Travel Planning?</h2>
        <p>Create your personalized travel plan in minutes.</p>
        <Link to="/planner" className="cta-button">
          Start Planning Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
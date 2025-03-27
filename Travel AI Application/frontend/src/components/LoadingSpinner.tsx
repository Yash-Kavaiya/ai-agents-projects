import React from 'react';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "AI Agents are working on your perfect trip..." 
}) => {
  return (
    <div className="loading-container">
      <div className="spinner">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      <p className="loading-message">{message}</p>
      
      {/* Show more detailed progress info */}
      <div className="loading-steps">
        <div className="loading-step active">
          <div className="step-indicator">1</div>
          <div className="step-text">Selecting ideal destinations</div>
        </div>
        <div className="loading-step">
          <div className="step-indicator">2</div>
          <div className="step-text">Researching local insights</div>
        </div>
        <div className="loading-step">
          <div className="step-indicator">3</div>
          <div className="step-text">Crafting personalized itinerary</div>
        </div>
        <div className="loading-step">
          <div className="step-indicator">4</div>
          <div className="step-text">Optimizing budget allocation</div>
        </div>
      </div>
      
      <p className="loading-note">
        This process typically takes 1-2 minutes as our AI analyzes thousands of travel options.
      </p>
    </div>
  );
};

export default LoadingSpinner;
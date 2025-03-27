import React, { useState } from 'react';
import TripForm from '../components/TripForm';
import TripResults from '../components/TripResults';
import LoadingSpinner from '../components/LoadingSpinner';
import { TripFormData, TripPlanOutput, LoadingState } from '../types';
import TravelApiService from '../services/api';

const TripPlannerPage: React.FC = () => {
  // State for loading and results
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [tripResults, setTripResults] = useState<TripPlanOutput | null>(null);
  
  const handleSubmit = async (formData: TripFormData) => {
    setLoadingState(LoadingState.LOADING);
    setErrorMessage(null);
    
    try {
      const response = await TravelApiService.generateTravelPlan(formData);
      
      if (response.status === 'success' && response.data) {
        setTripResults(response.data);
        setLoadingState(LoadingState.SUCCESS);
      } else {
        setErrorMessage(response.message || 'Failed to generate travel plan');
        setLoadingState(LoadingState.ERROR);
      }
    } catch (error) {
      console.error('Error generating plan:', error);
      setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
      setLoadingState(LoadingState.ERROR);
    }
  };
  
  // Determine what to show based on loading state
  const renderContent = () => {
    switch (loadingState) {
      case LoadingState.LOADING:
        return <LoadingSpinner />;
        
      case LoadingState.SUCCESS:
        return tripResults ? <TripResults results={tripResults} /> : null;
        
      case LoadingState.ERROR:
        return (
          <div className="error-container">
            <h3>Oops! Something went wrong</h3>
            <p>{errorMessage}</p>
            <button 
              className="retry-button"
              onClick={() => setLoadingState(LoadingState.IDLE)}
            >
              Try Again
            </button>
          </div>
        );
        
      case LoadingState.IDLE:
      default:
        return null;
    }
  };
  
  return (
    <div className="trip-planner-page">
      <div className="page-header">
        <h1>Plan Your Perfect Trip</h1>
        <p>Let our AI agents craft a personalized travel experience based on your preferences</p>
      </div>
      
      <div className="planner-container">
        <div className="planner-sidebar">
          <TripForm 
            onSubmit={handleSubmit} 
            isLoading={loadingState === LoadingState.LOADING} 
          />
        </div>
        
        <div className="planner-content">
          {loadingState === LoadingState.IDLE ? (
            <div className="get-started-message">
              <div className="message-icon">🌎</div>
              <h2>Ready to explore the world?</h2>
              <p>Fill out your travel preferences and let our AI create your dream itinerary.</p>
              <div className="features-list">
                <div className="feature">
                  <span className="feature-icon">🤖</span>
                  <span className="feature-text">AI-powered recommendations</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📅</span>
                  <span className="feature-text">Detailed day-by-day itineraries</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💰</span>
                  <span className="feature-text">Budget optimization</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🏙️</span>
                  <span className="feature-text">Local insights and hidden gems</span>
                </div>
              </div>
            </div>
          ) : (
            renderContent()
          )}
        </div>
      </div>
    </div>
  );
};

export default TripPlannerPage;
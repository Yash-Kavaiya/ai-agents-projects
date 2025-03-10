import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TripPlannerPage from './pages/TripPlannerPage';
import TravelApiService from './services/api';
import './styles/global.css';

const App: React.FC = () => {
  const [apiConnected, setApiConnected] = useState<boolean>(false);
  const [apiChecked, setApiChecked] = useState<boolean>(false);
  
  // Check API connection on app startup
  useEffect(() => {
    const checkApiConnection = async () => {
      try {
        const isHealthy = await TravelApiService.healthCheck();
        setApiConnected(isHealthy);
      } catch (error) {
        console.error('API connection check failed:', error);
        setApiConnected(false);
      } finally {
        setApiChecked(true);
      }
    };
    
    checkApiConnection();
  }, []);
  
  // Show API connection warning if needed
  const renderApiWarning = () => {
    if (apiChecked && !apiConnected) {
      return (
        <div className="api-warning">
          <p>
            <strong>Warning:</strong> Cannot connect to the Travel AI API. 
            Make sure the backend server is running.
          </p>
        </div>
      );
    }
    return null;
  };
  
  return (
    <Router>
      <div className="app">
        <Header />
        {renderApiWarning()}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/planner" element={<TripPlannerPage />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
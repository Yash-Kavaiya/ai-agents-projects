import React, { useState } from 'react';
import { TripPlanOutput } from '../types';
import ReactMarkdown from 'react-markdown';

interface TripResultsProps {
  results: TripPlanOutput;
}

const TripResults: React.FC<TripResultsProps> = ({ results }) => {
  const [activeTab, setActiveTab] = useState<keyof TripPlanOutput>('city_selection');
  
  // Mapping of tab keys to user-friendly names
  const tabNames: Record<keyof TripPlanOutput, string> = {
    city_selection: 'Recommended Cities',
    city_research: 'Destination Insights',
    itinerary: 'Detailed Itinerary',
    budget: 'Budget Breakdown'
  };

  return (
    <div className="trip-results-container">
      <h2>Your AI-Generated Travel Plan</h2>
      
      <div className="tabs-container">
        {Object.keys(tabNames).map((key) => (
          <button
            key={key}
            className={`tab-button ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key as keyof TripPlanOutput)}
          >
            {tabNames[key as keyof TripPlanOutput]}
          </button>
        ))}
      </div>
      
      <div className="tab-content">
        {results[activeTab] ? (
          <div className="markdown-content">
            <ReactMarkdown>{results[activeTab]}</ReactMarkdown>
          </div>
        ) : (
          <div className="no-content-message">
            <p>No information available.</p>
          </div>
        )}
      </div>
      
      <div className="download-section">
        <button 
          className="download-button"
          onClick={() => {
            // Create a text blob with all results
            const content = Object.entries(results)
              .map(([key, value]) => `# ${tabNames[key as keyof TripPlanOutput]}\n\n${value}`)
              .join('\n\n');
            
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            // Create a link element and trigger download
            const a = document.createElement('a');
            a.href = url;
            a.download = 'travel_plan.md';
            document.body.appendChild(a);
            a.click();
            
            // Clean up
            URL.revokeObjectURL(url);
            document.body.removeChild(a);
          }}
        >
          Download Complete Plan
        </button>
      </div>
    </div>
  );
};

export default TripResults;
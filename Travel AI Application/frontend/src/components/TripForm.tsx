import React, { useState } from 'react';
import { TripFormData, Interest, TravelType, Season, BudgetRange } from '../types';

interface TripFormProps {
  onSubmit: (data: TripFormData) => void;
  isLoading: boolean;
}

const TripForm: React.FC<TripFormProps> = ({ onSubmit, isLoading }) => {
  // Default form values
  const [formData, setFormData] = useState<TripFormData>({
    travel_type: 'Leisure',
    interests: ['History'],
    season: 'Summer',
    duration: 7,
    budget: '$1000-$2000',
  });

  // Available options
  const travelTypes: TravelType[] = ['Leisure', 'Business', 'Adventure', 'Cultural'];
  const interestOptions: Interest[] = ['History', 'Food', 'Nature', 'Art', 'Shopping', 'Nightlife'];
  const seasons: Season[] = ['Summer', 'Winter', 'Spring', 'Fall'];
  const budgetRanges: BudgetRange[] = ['$500-$1000', '$1000-$2000', '$2000-$5000', 'Luxury'];

  // Form change handlers
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInterestChange = (interest: Interest) => {
    const updatedInterests = formData.interests.includes(interest)
      ? formData.interests.filter(i => i !== interest)
      : [...formData.interests, interest];
    
    setFormData({
      ...formData,
      interests: updatedInterests,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="trip-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Trip Preferences</h2>
        
        {/* Travel Type Selection */}
        <div className="form-group">
          <label htmlFor="travel_type">Travel Type</label>
          <select
            id="travel_type"
            name="travel_type"
            value={formData.travel_type}
            onChange={handleChange}
            disabled={isLoading}
          >
            {travelTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        {/* Interests Multi-select */}
        <div className="form-group">
          <label>Interests</label>
          <div className="interests-container">
            {interestOptions.map(interest => (
              <div key={interest} className="interest-checkbox">
                <input
                  type="checkbox"
                  id={`interest-${interest}`}
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  disabled={isLoading}
                />
                <label htmlFor={`interest-${interest}`}>{interest}</label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Season Selection */}
        <div className="form-group">
          <label htmlFor="season">Season</label>
          <select
            id="season"
            name="season"
            value={formData.season}
            onChange={handleChange}
            disabled={isLoading}
          >
            {seasons.map(season => (
              <option key={season} value={season}>{season}</option>
            ))}
          </select>
        </div>
        
        {/* Duration Slider */}
        <div className="form-group">
          <label htmlFor="duration">
            Trip Duration: {formData.duration} days
          </label>
          <input
            type="range"
            id="duration"
            name="duration"
            min="1"
            max="14"
            value={formData.duration}
            onChange={handleChange}
            disabled={isLoading}
          />
          <div className="range-labels">
            <span>1 day</span>
            <span>14 days</span>
          </div>
        </div>
        
        {/* Budget Selection */}
        <div className="form-group">
          <label htmlFor="budget">Budget Range</label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            disabled={isLoading}
          >
            {budgetRanges.map(budget => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className="submit-button"
          disabled={isLoading || formData.interests.length === 0}
        >
          {isLoading ? 'Generating Plan...' : 'Generate Travel Plan'}
        </button>
      </form>
    </div>
  );
};

export default TripForm;
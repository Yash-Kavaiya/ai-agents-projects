import { TripFormData, ApiResponse, TripPlanOutput } from '../types';

// Get the API URL from environment variables or use default
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

/**
 * API service for the Travel AI application
 */
export const TravelApiService = {
  /**
   * Check if the API is healthy and available
   */
  healthCheck: async (): Promise<boolean> => {
    try {
      const response = await fetch(`${API_URL}/health`);
      const data = await response.json();
      return data.status === 'healthy';
    } catch (error) {
      console.error('API health check failed:', error);
      return false;
    }
  },

  /**
   * Generate a travel plan based on user preferences
   */
  generateTravelPlan: async (formData: TripFormData): Promise<ApiResponse<TripPlanOutput>> => {
    try {
      const response = await fetch(`${API_URL}/travel-plan`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to generate travel plan');
      }

      return await response.json();
    } catch (error) {
      console.error('Failed to generate travel plan:', error);
      return {
        status: 'error',
        message: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  },
};

export default TravelApiService;
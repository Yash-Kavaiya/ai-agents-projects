from flask import Flask, request, jsonify
from flask_cors import CORS
from trip_agents import TripCrew
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/health', methods=['GET'])
def health_check():
    """Simple endpoint to verify the API is working"""
    return jsonify({
        "status": "healthy",
        "message": "Travel AI API is operational"
    })

@app.route('/api/travel-plan', methods=['POST'])
def generate_travel_plan():
    """Endpoint to generate travel plans based on user preferences"""
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['travel_type', 'interests', 'season', 'duration', 'budget']
        missing_fields = [field for field in required_fields if field not in data]
        
        if missing_fields:
            return jsonify({
                "status": "error",
                "message": f"Missing required fields: {', '.join(missing_fields)}"
            }), 400
        
        # Prepare inputs for TripCrew
        inputs = {
            "travel_type": data['travel_type'],
            "interests": data['interests'],
            "season": data['season'],
            "duration": data['duration'],
            "budget": data['budget']
        }
        
        # Run TripCrew and get results
        crew_output = TripCrew(inputs).run()
        
        # Return the results
        return jsonify({
            "status": "success",
            "data": crew_output
        })
    
    except Exception as e:
        # Log the error (in a production environment, use a proper logger)
        print(f"Error generating travel plan: {str(e)}")
        
        # Return error response
        return jsonify({
            "status": "error",
            "message": f"Failed to generate travel plan: {str(e)}"
        }), 500

if __name__ == '__main__':
    # Get port from environment variable or use 5000 as default
    port = int(os.environ.get('PORT', 5000))
    # Run the Flask app
    app.run(host='0.0.0.0', port=port, debug=True)
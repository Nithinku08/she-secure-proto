from flask import Flask, request, jsonify
from flask_cors import CORS
import logging
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Configure logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Load the dataset to calculate averages
try:
    df = pd.read_csv('diabetes.csv')
    averages = {
        'Pregnancies': df['Pregnancies'].mean(),
        'Glucose': df['Glucose'].mean(),
        'BloodPressure': df['BloodPressure'].mean(),
        'SkinThickness': df['SkinThickness'].mean(),
        'Insulin': df['Insulin'].mean(),
        'BMI': df['BMI'].mean(),
        'DiabetesPedigreeFunction': df['DiabetesPedigreeFunction'].mean(),
        'Age': df['Age'].mean()
    }
    logger.info("Averages calculated successfully")
except Exception as e:
    logger.error(f"Error loading dataset: {str(e)}")
    raise

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from the request
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400

        # Validate required fields
        required_fields = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 
                         'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']
        
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400
            try:
                float(data[field])  # Validate that the value is a number
            except (ValueError, TypeError):
                return jsonify({"error": f"Invalid value for {field}. Must be a number."}), 400

        # Calculate comparisons with averages
        comparisons = {}
        above_average_count = 0
        
        for field, value in data.items():
            avg = averages[field]
            value_float = float(value)
            is_above = value_float > avg
            if is_above:
                above_average_count += 1
                
            comparisons[field] = {
                'value': value_float,
                'average': round(avg, 2),
                'status': 'Above Average' if is_above else 'Below Average'
            }

        # Determine health status based on number of above-average values
        health_status = "Health is at risk" if above_average_count >= 4 else "Health is generally good"
        risk_level = "High" if above_average_count >= 4 else "Low"
        risk_percentage = (above_average_count / len(required_fields)) * 100

        return jsonify({
            "risk_level": risk_level,
            "risk_percentage": round(risk_percentage, 2),
            "health_status": health_status,
            "comparisons": comparisons,
            "above_average_count": above_average_count
        })
    except Exception as e:
        logger.error(f"Error during analysis: {str(e)}")
        return jsonify({"error": f"An error occurred during analysis: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
from heart_disease_model import AverageBasedModel, initialize_model
import sys
import io

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Redirect stdout to suppress model initialization prints
original_stdout = sys.stdout
sys.stdout = io.StringIO()

# Initialize model and scaler
try:
    model, scaler = initialize_model()
except Exception as e:
    print(f"Error initializing model: {str(e)}")
    model = None
    scaler = None

# Restore stdout
sys.stdout = original_stdout

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if model is None or scaler is None:
        return jsonify({'error': 'Model not properly initialized'}), 500
        
    try:
        # Get data from requeste
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No data provided'}), 400
            
        # Validate required fields
        required_fields = ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 
                         'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400
            try:
                float(data[field])
            except ValueError:
                return jsonify({'error': f'Invalid value for {field}'}), 400
        
        
        input_data = np.array([[
            float(data['age']),
            float(data['sex']),
            float(data['cp']),
            float(data['trestbps']),
            float(data['chol']),
            float(data['fbs']),
            float(data['restecg']),
            float(data['thalach']),
            float(data['exang']),
            float(data['oldpeak']),
            float(data['slope']),
            float(data['ca']),
            float(data['thal'])
        ]])
        
        
        scaled_data = scaler.transform(input_data)
        
       
        current_average = float(np.mean(input_data))
        
        
        prediction = int(model.predict(scaled_data)[0])
        
       
        total_average = float(model.total_average / len(model.previous_averages))
        
     
        is_high_risk = bool(current_average > total_average)
        risk_message = "High risk of heart disease" if is_high_risk else "Low risk of heart disease"
        risk_details = f"Current input average ({current_average:.2f}) is {'higher' if is_high_risk else 'lower'} than historical average ({total_average:.2f})"
        
       
        performance_metrics = {
            'accuracy': model.accuracy,
            'total_predictions': model.total_predictions,
            'current_total_average': model.current_total_average,
            'average_predictions': model.average_predictions,
            'model_output': [
                "Model Performance:",
                f"Accuracy: {model.accuracy}",
                "\nAverage Statistics:",
                f"Total number of predictions: {model.total_predictions}",
                f"Current total average: {model.current_total_average}",
                f"Average of all predictions: {model.average_predictions}",
                f"\nRisk Assessment:",
                risk_message,
                risk_details
            ]
        }
        
        response_data = {
            'prediction': prediction,
            'current_average': current_average,
            'total_average': total_average,
            'is_high_risk': is_high_risk,
            'risk_message': risk_message,
            'risk_details': risk_details,
            'performance_metrics': performance_metrics
        }
        
        return jsonify(response_data)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000, threaded=True) 
from flask import Flask, render_template, request, jsonify
import pandas as pd
import numpy as np
from sklearn.preprocessing import StandardScaler
import pickle
import os

app = Flask(__name__)

def load_or_train_model():
    try:
        # Try to load existing model and scaler
        if os.path.exists('svm_model.pkl') and os.path.exists('scaler.pkl'):
            with open('svm_model.pkl', 'rb') as f:
                model = pickle.load(f)
            with open('scaler.pkl', 'rb') as f:
                scaler = pickle.load(f)
            return model, scaler
        else:
            # Train new model if files don't exist
            from breast_cancer import train_model
            return train_model()
    except Exception as e:
        print(f"Error loading/training model: {str(e)}")
        raise

# Load the model and scaler
model, scaler = load_or_train_model()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get values from the form
        features = [
            float(request.form['area_worst']),
            float(request.form['concave_points_worst']),
            float(request.form['concave_points_mean']),
            float(request.form['radius_worst']),
            float(request.form['perimeter_mean']),
            float(request.form['perimeter_worst']),
            float(request.form['radius_mean']),
            float(request.form['concavity_mean']),
            float(request.form['area_mean']),
            float(request.form['concavity_worst'])
        ]
        
        # Validate input values
        if any(np.isnan(features)) or any(np.isinf(features)):
            return jsonify({'error': 'Invalid input values detected'}), 400
        
        # Convert to numpy array and reshape
        features = np.array(features).reshape(1, -1)
        
        # Scale the features
        features_scaled = scaler.transform(features)
        
        # Make prediction
        prediction = model.predict(features_scaled)[0]
        probability = model.predict_proba(features_scaled)[0]
        
        # Prepare response
        result = {
            'prediction': 'Malignant' if prediction == 1 else 'Benign',
            'confidence': f"{max(probability) * 100:.2f}%"
        }
        
        return jsonify(result)
    
    except ValueError as ve:
        return jsonify({'error': 'Invalid input format. Please enter valid numbers.'}), 400
    except Exception as e:
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True) 
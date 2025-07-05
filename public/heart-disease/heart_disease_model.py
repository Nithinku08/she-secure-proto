import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

class AverageBasedModel:
    def __init__(self):
        self.previous_averages = []
        self.total_average = 0
        self.accuracy = 0
        self.total_predictions = 0
        self.current_total_average = 0
        self.average_predictions = 0
        
    def calculate_average(self, X):
        return np.mean(X, axis=1)
    
    def fit(self, X, y):
        # Calculate averages for training data
        train_averages = self.calculate_average(X)
        self.previous_averages = train_averages.tolist()
        self.total_average = np.sum(train_averages)
        
    def predict(self, X):
        # Calculate averages for new data
        new_averages = self.calculate_average(X)
        
        # Update total average
        self.total_average += np.sum(new_averages)
        self.previous_averages.extend(new_averages.tolist())
        self.total_predictions = len(self.previous_averages)
        self.current_total_average = self.total_average
        self.average_predictions = self.total_average / self.total_predictions
        
        # Make predictions based on average comparison
        predictions = []
        for avg in new_averages:
            if avg > self.total_average / len(self.previous_averages):
                predictions.append(1)  # High risk
            else:
                predictions.append(0)  # Low risk
                
        return np.array(predictions)

def initialize_model():
    # Load the dataset
    df = pd.read_csv('heart.csv')

    # Separate features and target
    X = df.drop('target', axis=1)
    y = df['target']

    # Split the data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

    # Scale the features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # Create and train the model
    model = AverageBasedModel()
    model.fit(X_train_scaled, y_train)

    # Make predictions
    y_pred = model.predict(X_test_scaled)

    # Store accuracy
    model.accuracy = np.mean(y_pred == y_test)
    
    return model, scaler 
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.preprocessing import StandardScaler
import pickle

def train_model():
    try:
        # Load the data
        df = pd.read_csv('data.csv')

        # Select the specified features
        selected_features = [
            'area_worst',
            'concave points_worst',
            'concave points_mean',
            'radius_worst',
            'perimeter_mean',
            'perimeter_worst',
            'radius_mean',
            'concavity_mean',
            'area_mean',
            'concavity_worst'
        ]

        # Prepare features and target
        X = df[selected_features]
        y = df['diagnosis'].map({'M': 1, 'B': 0})  # Convert M/B to 1/0

        # Split the data
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        # Scale the features (important for SVM)
        scaler = StandardScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_test_scaled = scaler.transform(X_test)

        # Create SVM model with probability estimates
        svm = SVC(probability=True, random_state=42)

        # Define parameter grid for SVM
        param_grid = {
            'C': [0.1, 1, 10],
            'gamma': ['scale', 'auto'],
            'kernel': ['rbf', 'linear']
        }

        # Perform grid search with cross-validation
        grid_search = GridSearchCV(svm, param_grid, cv=5, scoring='accuracy', n_jobs=-1)
        grid_search.fit(X_train_scaled, y_train)

        # Get best model
        best_model = grid_search.best_estimator_

        # Make predictions for both training and test sets
        y_train_pred = best_model.predict(X_train_scaled)
        y_test_pred = best_model.predict(X_test_scaled)

        # Calculate accuracies
        train_accuracy = accuracy_score(y_train, y_train_pred)
        test_accuracy = accuracy_score(y_test, y_test_pred)

        # Print results
        print("\nModel Performance:")
        print("-" * 50)
        print(f"Training Accuracy: {train_accuracy:.4f}")
        print(f"Testing Accuracy: {test_accuracy:.4f}")
        print("\nBest Parameters:", grid_search.best_params_)

        # Save the model and scaler
        with open('svm_model.pkl', 'wb') as f:
            pickle.dump(best_model, f)
        with open('scaler.pkl', 'wb') as f:
            pickle.dump(scaler, f)

        return best_model, scaler

    except Exception as e:
        print(f"Error during model training: {str(e)}")
        raise

if __name__ == "__main__":
    train_model() 
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load the dataset
# Replace 'diabetes.csv' with the path to your dataset
data = pd.read_csv('diabetes.csv')

# Split features and target
X = data[['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']]
y = data['Outcome']  # Target variable (1 for diabetes, 0 for no diabetes)

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the model
model = RandomForestClassifier(random_state=42)
model.fit(X_train, y_train)

# Save the trained model
with open('diabetes_model.pik', 'wb') as file:
    pickle.dump(model, file)

print("Model trained and saved as 'diabetes_model.pik'")
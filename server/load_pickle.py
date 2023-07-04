import pickle

with open('diabetes_med.pkl', 'rb') as f:
    data = pickle.load(f)

print(data)

from fastapi import FastAPI
from schemas import schemas
from fastapi.middleware.cors import CORSMiddleware
import os
import joblib

BASE_DIR = os.path.dirname(os.path.abspath(__file__))




model_path = os.path.join(BASE_DIR, "models", "spam_model.pkl")
vectorizer_path = os.path.join(BASE_DIR, "models", "tfidf_vectorizer.pkl")


model = joblib.load(model_path)
vectorizer = joblib.load(vectorizer_path)


app =FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3000"] for stricter rules
    allow_credentials=True,
    allow_methods=["*"],  # Allows GET, POST, OPTIONS, etc.
    allow_headers=["*"],
)


@app.post('/predict')
def predict(email:schemas.Email):
    X=vectorizer.transform([email.text])
    pred=model.predict(X)[0] #as the model gives an array u are accessing the first element
    return{"prediction":'spam' if pred else "not spam"}

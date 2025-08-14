from fastapi import FastAPI
from .schemas import schemas
import pickle

with open('models/spam_model.pkl','rb') as f:
    model=pickle.load(f)
with open('models/tfidf_vectorizer.pkl','rb') as f:
    vectorize=pickle.load(f)

app =FastAPI()


@app.post('/prefict')
def predict(email:schemas.Email):
    X=vectorize.transform([email.text])
    pred=model.predict(X)
    return{"prediction":'spam' if pred else "not spam"}
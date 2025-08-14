# 📧 Email Spam Classifier

A simple web app that checks if an email is **spam** or **not spam** using a machine learning model trained with TF-IDF features.

---

## 🚀 How It Works
- You type or paste an email into the textbox.
- The app sends the text to a backend API.
- The backend uses a trained ML model to predict spam or not spam.

---

## 🛠 Tech Used
- **Frontend:** Next.js, React
- **Backend:** FastAPI, Python
- **ML:** scikit-learn, TF-IDF, joblib

---

## 📂 Project Structure
spam-classifier/
│── backend/
│   ├── main.py
│   ├── schemas/
│   ├── models/
│   │   ├── spam_model.pkl
│   │   ├── tfidf_vectorizer.pkl
│── frontend/
│   ├── pages/
│   ├── components/

---


Clone the repo
git clone https://github.com/Dhanush-Poduval/spam-classifier.git
cd spam-classifier

---

Backend Setup
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

---

Frontend Setup
cd frontend
npm install
npm run dev



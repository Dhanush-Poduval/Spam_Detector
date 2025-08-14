from fastapi import FastAPI
from pydantic import BaseModel

app =FastAPI()

@app.get('/details')
def values():
    return 'Spider man is the best'
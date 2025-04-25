from fastapi import FastAPI
from app.api.api_v1 import api_router

app = FastAPI()
app.include_router(api_router, prefix="/api/v1")

@app.get("/health")
def health_check():
    return {"status": "ok"}

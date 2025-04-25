import os
from pydantic import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = os.getenv("SECRET_KEY", "default_secret")
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./resume.db")
    NLP_MODEL: str = "en_core_web_lg"
    ALLOWED_FILE_TYPES: list = ["pdf", "docx"]
    MAX_FILE_SIZE_MB: int = 5

settings = Settings()

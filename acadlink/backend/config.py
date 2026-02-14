from dotenv import load_dotenv
import os

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY') or 'your_default_secret_key'
    DATABASE_URI = os.getenv('DATABASE_URI') or 'sqlite:///site.db'
    DEBUG = os.getenv('DEBUG', 'False').lower() in ['true', '1', 't']
    JSON_SORT_KEYS = False
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SECURE = os.getenv('SESSION_COOKIE_SECURE', 'False').lower() in ['true', '1', 't']
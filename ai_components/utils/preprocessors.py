import spacy
import re
from PIL import Image
import cv2

nlp = spacy.load("en_core_web_sm")

def clean_text(text):
    """Preprocess resume text"""
    text = re.sub(r'\s+', ' ', text)  # Remove extra spaces
    text = re.sub(r'[^\w\s]', '', text)  # Remove punctuation
    return text.lower().strip()

def tokenize(text):
    """Tokenize text using spaCy"""
    doc = nlp(text)
    return [token.text for token in doc if not token.is_stop]

def preprocess_image(image_path):
    """Preprocess resume layout images"""
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    resized = cv2.resize(gray, (224, 224))
    return resized / 255.0  # Normalize

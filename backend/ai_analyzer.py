from sklearn.feature_extraction.text import TfidfVectorizer
from sentence_transformers import SentenceTransformer
import numpy as np

class AIAnalyzer:
    def __init__(self):
        self.tfidf = TfidfVectorizer(stop_words='english')
        self.embedder = SentenceTransformer('all-MiniLM-L6-v2')
    
    def analyze_job_fit(self, resume: str, job_desc: str) -> dict:
        """Calculate semantic and keyword match"""
        # Semantic similarity
        embeddings = self.embedder.encode([resume, job_desc])
        similarity = np.dot(embeddings[0], embeddings[1])
        
        # Keyword analysis
        self.tfidf.fit([resume, job_desc])
        vectors = self.tfidf.transform([resume, job_desc])
        keyword_score = (vectors[0] @ vectors[1].T).toarray()[0][0]
        
        return {
            "semantic_score": float(similarity),
            "keyword_score": float(keyword_score)
        }

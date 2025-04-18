# app.py

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze_resume():
    data = request.get_json()
    resume_text = data.get("text", "")

    if not resume_text:
        return jsonify({"error": "No resume content provided."}), 400

    # Placeholder for actual AI resume analysis logic
    # For now, we return a dummy analysis
    analysis = {
        "strengths": ["Clear objective statement", "Relevant experience", "Good formatting"],
        "weaknesses": ["Lacks keywords for ATS", "No quantifiable achievements"],
        "ats_score": 67,
        "recommendations": [
            "Use more action verbs.",
            "Include job-specific keywords.",
            "Add metrics to accomplishments."
        ],
        "suggested_templates": ["Modern", "Professional", "Minimalist"],
        "job_matches": [
            {"title": "Data Analyst", "company": "TechCorp", "location": "Remote"},
            {"title": "Business Analyst", "company": "Finlytics", "location": "New York"}
        ]
    }

    return jsonify(analysis)

if __name__ == '__main__':
    app.run(debug=True)

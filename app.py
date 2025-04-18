# app.py

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/analyze", methods=["POST"])
def analyze_resume():
    data = request.get_json()
    resume_text = data.get("text", "")

    if not resume_text:
        return jsonify({"error": "No resume text provided"}), 400

    # Placeholder logic for resume analysis
    response = {
        "ats_score": 78,
        "strengths": ["Strong action verbs", "Clear structure", "Relevant skills"],
        "weaknesses": ["Too many buzzwords", "Lacks quantifiable achievements"],
        "recommendations": [
            "Use numbers to quantify impact",
            "Tailor to job descriptions",
            "Add a professional summary"
        ],
        "suggested_templates": ["Modern Clean", "ATS Optimized", "Minimalist"],
        "job_matches": [
            {"title": "Data Analyst", "company": "Google", "location": "New York, NY"},
            {"title": "Junior Developer", "company": "Meta", "location": "San Francisco, CA"},
            {"title": "AI Research Intern", "company": "OpenAI", "location": "Remote"}
        ]
    }

    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)

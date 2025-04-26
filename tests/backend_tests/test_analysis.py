import pytest
from app.services.ai_analyzer import AIAnalyzer
from app.services.ats_checker import ATSChecker

@pytest.fixture
def analyzer():
    return AIAnalyzer()

def test_semantic_analysis(analyzer):
    """Test semantic similarity calculation"""
    resume = "Full-stack developer with React and Node.js experience"
    job_desc = "Seeking web developer proficient in JavaScript frameworks"
    result = analyzer.analyze_job_fit(resume, job_desc)
    
    assert 0.4 <= result['semantic_score'] <= 1.0
    assert result['keyword_score'] > 0

def test_ats_compliance():
    """Test ATS compliance checks"""
    checker = ATSChecker()
    text = "5+ years Python experience. Led team of 5 developers."
    result = checker.check_compliance(text)
    
    assert result['score'] >= 70
    assert "experience" in result['keywords']
    assert len(result['warnings']) == 0

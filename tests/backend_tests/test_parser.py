import pytest
from unittest.mock import patch, mock_open
from app.services.resume_parser import ResumeParser

@pytest.fixture
def parser():
    return ResumeParser()

def test_pdf_parsing(parser):
    """Test PDF file parsing and skill extraction"""
    test_text = "Python Developer with 5 years experience in Django and Flask"
    with patch("pdfminer.high_level.extract_text") as mock_extract:
        mock_extract.return_value = test_text
        result = parser.parse("dummy.pdf")
        
        assert "Python" in result['skills']
        assert "Django" in result['skills']
        assert len(result['skills']) == 3

def test_docx_parsing(parser):
    """Test DOCX file parsing and structure analysis"""
    mock_text = "Senior ML Engineer\nTensorFlow PyTorch Apache Spark"
    with patch("docx.Document") as mock_doc:
        mock_doc.return_value.paragraphs = [mock.Mock(text=mock_text)]
        result = parser.parse("dummy.docx")
        
        assert "TensorFlow" in result['skills']
        assert "ML Engineer" in result['experience'][0]

def test_invalid_file_type(parser):
    """Test handling of unsupported file formats"""
    with pytest.raises(ValueError) as exc_info:
        parser.parse("invalid.jpg")
    assert "Unsupported file type" in str(exc_info.value)

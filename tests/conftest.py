import pytest
from fastapi.testclient import TestClient
from app.main import app

@pytest.fixture(scope="module")
def test_client():
    return TestClient(app)

@pytest.fixture
def sample_pdf_content():
    return b"%PDF-1.4 fake PDF content"

@pytest.fixture
def sample_docx_content():
    return b"PK\x03\x04 fake DOCX content"

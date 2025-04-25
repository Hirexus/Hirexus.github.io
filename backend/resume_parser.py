import spacy
from pdfminer.high_level import extract_text
from docx import Document
from typing import Union

nlp = spacy.load("en_core_web_lg")

class ResumeParser:
    def parse(self, file_path: str) -> dict:
        """Parse PDF/DOCX resume files"""
        if file_path.endswith('.pdf'):
            text = extract_text(file_path)
        elif file_path.endswith('.docx'):
            text = self._parse_docx(file_path)
        else:
            raise ValueError("Unsupported file type")
        
        return self._analyze_text(text)

    def _parse_docx(self, path: str) -> str:
        doc = Document(path)
        return '\n'.join([para.text for para in doc.paragraphs])

    def _analyze_text(self, text: str) -> dict:
        doc = nlp(text)
        return {
            "skills": [ent.text for ent in doc.ents if ent.label_ == "SKILL"],
            "experience": self._extract_experience(doc),
            "education": self._extract_education(doc)
        }

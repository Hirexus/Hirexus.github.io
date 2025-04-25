import re

class ATSChecker:
    def __init__(self):
        self.rules = {
            "required_sections": ["experience", "education", "skills"],
            "keywords": ["managed", "achieved", "developed"],
            "forbidden": ["references available"]
        }
    
    def check_compliance(self, text: str) -> dict:
        """Check ATS compliance rules"""
        results = {"warnings": [], "score": 100}
        
        # Section checks
        if not re.search(r"work\s+history", text, re.I):
            results["warnings"].append("Missing work experience section")
            results["score"] -= 20
            
        # Keyword checks
        matches = [kw for kw in self.rules["keywords"] if re.search(rf"\b{kw}\b", text)]
        if len(matches) < 3:
            results["warnings"].append("Low action verb count")
            
        return results

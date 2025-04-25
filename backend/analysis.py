from fastapi import APIRouter, UploadFile, File
from app.services import resume_parser, ai_analyzer, ats_checker

router = APIRouter()

@router.post("/analyze")
async def analyze_resume(file: UploadFile = File(...)):
    # Save and process file
    contents = await file.read()
    file_path = f"/tmp/{file.filename}"
    
    with open(file_path, "wb") as f:
        f.write(contents)
    
    # Parse resume
    parser = resume_parser.ResumeParser()
    analysis = parser.parse(file_path)
    
    # Add ATS check
    ats = ats_checker.ATSChecker()
    analysis["ats"] = ats.check_compliance(analysis["text"])
    
    return analysis

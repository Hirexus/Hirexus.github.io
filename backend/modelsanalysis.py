from sqlalchemy import JSON, DateTime
from app.database import Base

class AnalysisResult(Base):
    __tablename__ = "analysis_results"
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    raw_text = Column(Text)
    skills = Column(JSON)
    analysis_data = Column(JSON)
    created_at = Column(DateTime)

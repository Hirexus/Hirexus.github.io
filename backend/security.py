import magic
from fastapi import HTTPException

def validate_file_type(file):
    mime = magic.from_buffer(file.read(2048), mime=True)
    if mime not in ["application/pdf", "application/vnd.openxmlformats"]:
        raise HTTPException(400, "Invalid file type")
    file.seek(0)

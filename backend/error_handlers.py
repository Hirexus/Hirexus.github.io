from fastapi import HTTPException

def handle_file_errors(e: Exception):
    raise HTTPException(
        status_code=400,
        detail=f"File processing error: {str(e)}"
    )

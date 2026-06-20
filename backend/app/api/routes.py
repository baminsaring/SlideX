from fastapi import APIRouter


from app.services.llm import llm_call

router = APIRouter(prefix="/api")

@router.get("/")
def home():
    return {
        "msg": "Welcome to AI Powered PPT Maker!"
    }

@router.post("/generate")
def generate_ppt(prompt: str):

    result = llm_call(prompt=prompt)

    return {
        "msg": "PPT generated successfully.",
        "result": result
    }

@router.get("/download")
def download_ppt():

    return {
        "msg": "File has been downloaded."
    }
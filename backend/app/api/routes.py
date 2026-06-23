from fastapi import APIRouter
from fastapi.responses import FileResponse


from app.services.llm import model
from app.services.ppt_generator_agent import ppt_agent

router = APIRouter(prefix="/api")

@router.get("/")
def home():
    return {
        "msg": "Welcome to AI Powered PPT Maker!"
    }

@router.post("/generate")
def generate_ppt(prompt: str):

    #result = model(prompt=prompt)
    response = ppt_agent.invoke({"topic": prompt})

    print("======== File Path ===========\n")
    print(response)
    print(response.get("file_path"))
    print("=======================\n")

    return {
        "msg": "PPT generated successfully.",
        "file_path": response.get("file_path")
    }

@router.get("/download/")
def download_ppt(file_path: str):

    #file_path = "/home/bamin-saring/My_Projects/SlideX/backend/static/ppt_files/my_ppt.pptx"
    print(file_path)

    return FileResponse(
        path=file_path,
        media_type="application/vnd.openxmlformats-officedocument.presentationml.presentation",
        filename="my_ppt.pptx"
    )
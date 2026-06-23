from langchain.chat_models import init_chat_model
from dotenv import load_dotenv

load_dotenv()


def llm_model():
    llm = init_chat_model("openai:gpt-4.1-nano")

    # result = model.invoke(prompt)

    # print(result.content)

    return llm


model = llm_model()
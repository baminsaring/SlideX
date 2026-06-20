from langchain.chat_models import init_chat_model


def model(prompt: str) -> str:
    model = init_chat_model("openai:gpt-4.1-nano")

    result = model.invoke(prompt)

    print(result.content)

    return result.content
from langchain.tools import tool
from langgraph.graph import StateGraph, START, END
from langchain.messages import AnyMessage
from typing_extensions import TypedDict, Annotated
from typing import Dict, List

from .llm import model

class PPTState(TypedDict):
    prompt: str
    outline: Dict[str]
    ppt: List[dict]
    file_path: str


def a(state: PPTState):
    print("I'm A")

def b(state: PPTState):
    print("I'm B")

def c(state: PPTState):
    print("I'm C")


# Workflow
agent_builder = StateGraph(PPTState)

# Nodes
agent_builder.add_node("a", a)
agent_builder.add_node("b", b)


# Connect nodes to edge
agent_builder.add_edge("a", "b")
agent_builder.add_edge("b", "c")
agent_builder.add_edge("c", END)

agent = agent_builder.compile()
from typing import List, Optional
from fastapi import FastAPI, WebSocket
from openai import AsyncOpenAI
from openai.types.beta.threads.run import RequiredAction, LastError
from openai.types.beta.threads.run_submit_tool_outputs_params import ToolOutput
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
    expose_headers=["Content-Disposition"]  # Add additional headers as needed
)

client = AsyncOpenAI(
    api_key="<YOUR-API-KEY-HERE>",
)
assistant_id = "<YOUR-ASSISTANT-ID-HERE>"
run_finished_states = ["completed", "failed", "cancelled", "expired", "requires_action"]


class RunStatus(BaseModel):
    run_id: str
    thread_id: str
    status: str
    required_action: Optional[RequiredAction]
    last_error: Optional[LastError]


class ThreadMessage(BaseModel):
    content: str
    role: str
    hidden: bool
    id: str
    created_at: int


class Thread(BaseModel):
    messages: List[ThreadMessage]


class CreateMessage(BaseModel):
    content: str



@app.get("/api/threads/{thread_id}/runs/{run_id}")
async def get_run(thread_id: str, run_id: str):
    run = await client.beta.threads.runs.retrieve(
        thread_id=thread_id,
        run_id=run_id
    )

    return RunStatus(
        run_id=run.id,
        thread_id=thread_id,
        status=run.status,
        required_action=run.required_action,
        last_error=run.last_error
    )


# @app.post("/api/threads/{thread_id}/runs/{run_id}/tool")
# async def post_tool(thread_id: str, run_id: str, tool_outputs: List[ToolOutput]):
#     run = await client.beta.threads.runs.submit_tool_outputs(
#         run_id=run_id,
#         thread_id=thread_id,
#         tool_outputs=tool_outputs
#     )
#     return RunStatus(
#         run_id=run.id,
#         thread_id=thread_id,
#         status=run.status,
#         required_action=run.required_action,
#         last_error=run.last_error
#     )

# @app.websocket("/ws/{thread_id}")
# async def websocket_endpoint(websocket: WebSocket, thread_id: str):
#     await websocket.accept()
#     print('Accepting client connection...')
#     messages = await client.beta.threads.messages.list(thread_id=thread_id)
#     print(messages)
#     for message in messages.data:
#         message_data = message.dict()
#         message_data["role"] = message.role  # Add the 'role' attribute to the message data
#         data = json.dumps(message_data) 
#         await websocket.send_text(data)

#     while True:
#         data = await websocket.receive_text()
#         create_message = CreateMessage(content=data)
#         await client.beta.threads.messages.create(
#             thread_id=thread_id,
#             content=create_message.content,
#             role="user"
#         )

#         run = await client.beta.threads.runs.create(
#             thread_id=thread_id,
#             assistant_id=assistant_id
#         )

#         messages = await client.beta.threads.messages.list(thread_id=thread_id)
#         print(messages)
#         for message in messages.data:
#             data = json.dumps(message.dict())
            
#             await websocket.send_text(data)

@app.post("/api/new")
async def post_new():
    thread = await client.beta.threads.create()
    await client.beta.threads.messages.create(
        thread_id=thread.id,
        content="Greet the user and tell it about yourself and ask it what it is looking for.",
        role="user",
        metadata={
            "type": "hidden"
        }
    )
    run = await client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant_id
    )

    return RunStatus(
        run_id=run.id,
        thread_id=thread.id,
        status=run.status,
        required_action=run.required_action,
        last_error=run.last_error
    )

@app.get("/api/threads/{thread_id}")
async def get_thread(thread_id: str):
    messages = await client.beta.threads.messages.list(
        thread_id=thread_id
    )
    result = [
        ThreadMessage(
            content=message.content[0].text.value,
            role=message.role,
            hidden="type" in message.metadata and message.metadata["type"] == "hidden",
            id=message.id,
            created_at=message.created_at
        )
        for message in messages.data
    ]
    print(result)
    return Thread(
        messages=result,
    )
    

@app.post("/api/threads/{thread_id}")
async def post_thread(thread_id: str, message: CreateMessage):
    
    await client.beta.threads.messages.create(
        thread_id=thread_id,
        content=message.content,
        role="user"
    )

    run = await client.beta.threads.runs.create(
        thread_id=thread_id,
        assistant_id=assistant_id
    )
    print("POSTED")
    return RunStatus(
        run_id=run.id,
        thread_id=thread_id,
        status=run.status,
        required_action=run.required_action,
        last_error=run.last_error
    )
import time

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

from .api.v1.router import router
from .database.db import engine
from .database.models import Base


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Booking Management",
    description="Booking backend",
    version="0.0.1",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    """
    Middleware to adds execution time to
    X-Process-Time header to every request

    Parameters
    ----------
    request: Request
        Request from the API
    call_next: Function
        It will receive the request as a parameter.
        This function will pass the request to the corresponding path operation.
        Then it returns the response generated by the corresponding path operation.

    Returns
    -------
        response: dict
            Response with added time header
    """
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response


app.include_router(router, prefix="/api/v1")

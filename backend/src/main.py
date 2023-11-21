import time

from contextlib import asynccontextmanager

from common.exception import CustomException
from common.logger import Logger
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("startup")

    yield

    logger.info("shutdown")


app = FastAPI(title="Template Project", lifespan=lifespan)

logger = Logger.getLogger(__name__)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.exception_handler(CustomException)
async def mlops_exception_handler(request: Request, exc: CustomException):
    # print(exc)
    return JSONResponse(
        status_code=200,
        content={"code": exc.code, "errMsg": exc.errMsg},
    )


@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = (time.time() - start_time) * 1000
    logger.info(f"{request.url.path} | response time : {process_time:.3f} ms")
    response.headers["X-Process-Time"] = str(process_time)
    return response


@app.get("/")
def read_root():
    return {"Hello": "World"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8888, reload=True)

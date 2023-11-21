import os

from functools import lru_cache

from fastapi.security import HTTPBearer
from pydantic import BaseSettings


PROFILE = os.getenv("PROFILE", "local")


class Config:
    # env_file = f'../env/.env.{PROFILE}'
    env_file = os.path.join(
        os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))), f"env/.env.{PROFILE}"
    )
    env_file_encoding = "utf-8"


class Settings(BaseSettings):
    class Config(Config):
        pass

    LOG_DIR: str
    LOG_FILE_NAME: str
    LOGGER_NAME: str
    DB_DIR: str
    MODEL_SERVER: str


class AuthConfig(BaseSettings):
    class Config(Config):
        pass

    JWT_ALG: str
    JWT_ACCESS_TOKEN_EXP_MINUTES: int
    JWT_REFRESH_TOKEN_EXP_MINUTES: int
    JWT_SECRET: str


security = HTTPBearer()
auth_config = AuthConfig()


@lru_cache()
def get_settings():
    return Settings()

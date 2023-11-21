from typing import Any, Optional

from pydantic import BaseModel


class BaseResponse(BaseModel):
    code: int
    errMsg: str
    data: Optional[Any] = None

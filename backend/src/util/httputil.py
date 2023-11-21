from typing import Any, Optional

from schema.http_response import BaseResponse


def make_response(code: int, errMsg: str, data: Optional[Any] = None):
    return BaseResponse(code=code, errMsg=errMsg, data=data)


def make_success_response(data: Optional[Any] = None):
    return BaseResponse(code=0, errMsg="success", data=data)


def make_failure_response(code: int = 1, errMsg: Optional[str] = "failure"):
    return BaseResponse(code=code, errMsg=errMsg, data=None)

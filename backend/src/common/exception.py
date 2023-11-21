import typing


class CustomException(Exception):
    def __init__(self, code: int, errMsg: typing.Optional[str] = None) -> None:
        self.code = code
        self.errMsg = errMsg or "Custom Exception"

    def __repr__(self) -> str:
        class_name = self.__class__.__name__
        return f"{class_name}(code={self.code!r}, errMsg={self.errMsg!r})"

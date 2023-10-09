from pydantic import BaseModel


class UserCreate(BaseModel):
    gender: bool
    nickname: str

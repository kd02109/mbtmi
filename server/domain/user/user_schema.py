from pydantic import BaseModel

class UserCreate(BaseModel):
    gender: bool
    nickname: str

class UserGet(UserCreate):
    id: int
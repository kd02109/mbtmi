from pydantic import BaseModel

class UserCreate(BaseModel):
    gender: str
    nickname: str

class UserGet(UserCreate):
    id: int
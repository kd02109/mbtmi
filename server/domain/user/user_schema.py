from pydantic import BaseModel

class UserCreate(BaseModel):
    gender: str
    nickname: str

class MbtiInsert(BaseModel):
    mbti: str
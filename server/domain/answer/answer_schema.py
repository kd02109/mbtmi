from pydantic import BaseModel

class AnswerCreate(BaseModel):
    content: str
    class Config:
        orm_mode = True

class RecentAnswerGet(AnswerCreate):
    # user_id: int
    question_id: int
    class Config:
        orm_mode = True
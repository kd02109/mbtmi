import datetime

from pydantic import BaseModel

class AnswerCreate(BaseModel):
    # id: int
    # user_id: int
    # question_id: int
    content: str
    # create_date: datetime.datetime
    class Config:
        orm_mode = True

class RecentAnswerGet(AnswerCreate):
    # user_id: int
    question_id: int
    class Config:
        orm_mode = True
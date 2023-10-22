import datetime

from pydantic import BaseModel

class AnswerCreate(BaseModel):
    id: int
    user_id: int
    question_id: int
    content: str
    create_date: datetime.datetime
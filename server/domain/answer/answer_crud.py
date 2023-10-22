from datetime import datetime
from sqlalchemy.orm import Session

from domain.answer.answer_schema import AnswerCreate
from models import Answer

def create_answer(db: Session, answer_create: AnswerCreate):
    pass
from fastapi import APIRouter, Depends, HTTPException, Header
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from starlette import status
from typing import Optional, Union

from database import get_db
from domain.answer import answer_schema, answer_crud
from domain.user import user_schema, user_crud

router = APIRouter(
    prefix="/answer"
)

@router.post("/message/{question_id}")
def answer_create(question_id: int, answer_create: answer_schema.AnswerCreate, _user_token: Optional[str] = Header(None), db: Session = Depends(get_db)):
    answer_crud.create_answer(db=db, answer_create=answer_create, token=_user_token, question_id=question_id)
    return None

@router.get("/visiting", response_model=list[answer_schema.RecentAnswerGet])
def recent_answer_get(_user_token: Optional[str] = Header(None), db: Session = Depends(get_db)):
    user_data, recent_answer = answer_crud.get_recent_answer(db=db, token=_user_token)
    return recent_answer
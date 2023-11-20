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
def answer_create(question_id: str, answer_create: answer_schema.AnswerCreate, _user_token: Optional[str] = Header(None), db: Session = Depends(get_db)):
    answer_crud.create_answer(db=db, answer_create=answer_create, token=_user_token, question_id=question_id)
    return -1

@router.get("/visiting")
def recent_answer_get(_user_token: Optional[str] = Header(None), db: Session = Depends(get_db)):
    user_data, recent_answer = answer_crud.get_recent_answer(db=db, token=_user_token)
    return {
        'user': {'gender': user_data[1], 'nickname': user_data[2]},
        'answer': recent_answer
    }
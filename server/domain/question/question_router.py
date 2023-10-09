from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from domain.question import question_schema, question_crud

router = APIRouter(
    prefix="/api/question",
)


@router.get("/list", response_model=list[question_schema.Question])
def question_list(db: Session = Depends(get_db)):
    print("Test")
    _question_list = question_crud.get_question_list(db)
    return _question_list

@router.get("/mbtmi/{user_id}")
def mbtmi_result(user_id: int):
    _user_mbtmi = question_crud.get_user_mbtmi(user_id=user_id)
    return _user_mbtmi
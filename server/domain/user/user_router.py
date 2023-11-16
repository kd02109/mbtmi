from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from domain.user import user_schema, user_crud

router = APIRouter(
    prefix="/user",
)

@router.post("/starting")
def user_create(_user_create: user_schema.UserCreate, db: Session = Depends(get_db)):
    user_token = user_crud.create_user(db=db, user_create=_user_create)
    return user_token

@router.get("/mbtmi")
def question_list():
    _user_mbtmi = user_crud.get_user_mbtmi(user_id=100)
    return _user_mbtmi
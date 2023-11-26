from fastapi import APIRouter, Depends, HTTPException, Header
from sqlalchemy.orm import Session
from typing import Optional, Union
from fastapi.encoders import jsonable_encoder
from database import get_db
from domain.user import user_schema, user_crud

router = APIRouter(
    prefix="/user",
)

@router.post("/starting")
def user_create(_user_create: user_schema.UserCreate, db: Session = Depends(get_db)):
    user_token = user_crud.create_user(db=db, user_create=_user_create)
    return user_token

@router.post("/answers")
def mbtmi_update(_user_token: Optional[str] = Header(None), db: Session = Depends(get_db)):
    user_data = user_crud.update_user_mbtmi(db=db, token=_user_token)
    return {
        'done': True,
        'user': {'gender': user_data.gender, 'nickname': user_data.nickname, 'mbtmi': user_data.mbtmi}
    }

@router.patch("/mbti")
def mbti_update(_mbti_insert: user_schema.MbtiInsert, _user_token: Optional[str] = Header(None), db: Session = Depends(get_db)):
    print('okay')
    user_crud.update_user_mbti(db=db, token=_user_token, mbti_insert=jsonable_encoder(_mbti_insert))
    return {
        'done': True
    }

@router.get("/mbtmi")
def mbtmi_get(_user_token: Optional[str] = Header(None), db: Session = Depends(get_db)):
    user_mbtmi = user_crud.get_user_mbtmi(db=db, token=_user_token)
    return {
        'user': {'nickname': user_mbtmi[0], 'mbtmi': user_mbtmi[1]}
    }

@router.get("/number")
def number_get(db: Session = Depends(get_db)):
    user_number = user_crud.get_user_number(db=db)
    return {
        'number': user_number[0]
    }
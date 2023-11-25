from collections import defaultdict
from datetime import datetime
from sqlalchemy.orm import Session
from sqlalchemy import func

from domain.user.user_schema import UserCreate, MbtiInsert
from models import UserTable, Answer
from auth.auth_handler import signJWT

def create_user(db: Session, user_create: UserCreate):
    print("create new user")
    create_date = datetime.now()
    jwt_token = signJWT(user_nickname=user_create.nickname, create_date=create_date)
    db_user = UserTable(gender=user_create.gender,
                        nickname=user_create.nickname,
                        jwt_token=jwt_token['token'],
                        create_date=create_date
                        )
    db.add(db_user)
    db.commit()
    return jwt_token

def update_user_mbtmi(db: Session, token):
    user_data = db.query(UserTable).filter(UserTable.jwt_token == token).first()
    answer_data = db.query(Answer.question_id, Answer.content).filter(Answer.user_id == user_data.id).order_by(Answer.create_date).all()
    answer_dict = defaultdict(list)
    for i in answer_data:
        answer_dict[i[0]].append(i[1])
    print("answer_dict model에 집어넣어 결과값 추출 !")
    user_data.mbtmi = 'ENTP'
    db.add(user_data)
    db.commit()
    return -1

def update_user_mbti(db: Session, mbti_insert, token):
    user_data = db.query(UserTable).filter(UserTable.jwt_token == token).first()
    user_data.mbti = mbti_insert['mbti']
    db.add(user_data)
    db.commit()
    return -1

def get_user_mbtmi(db: Session, token):
    user_data = db.query(UserTable.nickname, UserTable.mbtmi).filter(UserTable.jwt_token == token).one()
    return user_data

def get_user_number(db: Session):
    user_data = db.query(func.count(UserTable.id)).one()
    return user_data
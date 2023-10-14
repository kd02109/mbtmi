from datetime import datetime
from sqlalchemy.orm import Session

from domain.user.user_schema import UserCreate
from models import UserTable
from auth.auth_handler import signJWT

def create_user(db: Session, user_create: UserCreate):
    print("create new user")
    create_date = datetime.now()
    jwt_token = signJWT(user_create.nickname, create_date)
    db_user = UserTable(gender=user_create.gender,
                        nickname=user_create.nickname,
                        jwt_token=jwt_token['token'],
                        create_date=create_date
                        )
    db.add(db_user)
    db.commit()
    return jwt_token

def get_user_mbtmi(user_id: int):
    print('mbtmi')
    return {'mbtmi': 'ENTP'}
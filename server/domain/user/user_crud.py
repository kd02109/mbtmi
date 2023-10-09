from datetime import datetime
from sqlalchemy.orm import Session

from domain.user.user_schema import UserCreate
from models import UserTable

def create_user(db: Session, user_create: UserCreate):
    print("create new user")
    db_user = UserTable(gender=user_create.gender,
                        nickname=user_create.nickname,
                        create_date=datetime.now()
                        )
    db.add(db_user)
    db.commit()

def get_user_mbtmi(user_id: int):
    print('mbtmi')
    return {'mbtmi': 'ENTP'}
from collections import defaultdict
from datetime import datetime
from sqlalchemy.orm import Session

from domain.answer.answer_schema import AnswerCreate
from models import Answer, UserTable


def create_answer(db: Session, answer_create: AnswerCreate, token, question_id):
    user_id = db.query(UserTable.id).filter(UserTable.jwt_token==token)
    db_answer = Answer(user_id=user_id,
                       question_id=int(question_id),
                       content=answer_create.content,
                       create_date=datetime.now())
    db.add(db_answer)
    db.commit()
    return -1

def get_recent_answer(db: Session, token):
    try:
        answer_dict = defaultdict(list)
        user_data = db.query(UserTable.id, UserTable.gender, UserTable.nickname).filter(UserTable.jwt_token == token).one()
        recent_answer = db.query(Answer.question_id, Answer.content).filter(Answer.user_id == user_data[0]).order_by(Answer.create_date).all()
        for i in recent_answer:
            answer_dict[i[0]].append(i[1])
    except Exception as e:
        print('*'*100)
        print(e)
    finally:
        for i in range(1,7):
            if i not in answer_dict.keys():
                answer_dict[str(i)].extend([])
    return user_data, answer_dict

from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from database import Base


class Question(Base):
    __tablename__ = "question"

    id = Column(Integer, primary_key=True)
    subject = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    create_date = Column(DateTime, nullable=False)

class UserTable(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, autoincrement=True)
    gender = Column(Text, nullable=False)
    nickname = Column(Text, nullable=False)
    mbtmi = Column(String, nullable=True)
    mbti = Column(Text, nullable=True)
    jwt_token = Column(Text, nullable=True)
    create_date = Column(DateTime, nullable=False)
    answer = relationship("Answer", backref="users")

class Answer(Base):
    __tablename__ = "answer"

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey("user.id"))
    question_id = Column(Integer, nullable=False)
    content = Column(Text, nullable=False)
    create_date = Column(DateTime, nullable=False)
    user = relationship("UserTable", backref="answers")

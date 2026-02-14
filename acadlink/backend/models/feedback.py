from datetime import datetime
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from . import Base

class Feedback(Base):
    __tablename__ = 'feedback'

    id = Column(Integer, primary_key=True, autoincrement=True)
    student_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    teacher_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    content = Column(String, nullable=False)
    created_at = Column(String, default=datetime.utcnow)

    student = relationship("User", foreign_keys=[student_id])
    teacher = relationship("User", foreign_keys=[teacher_id])

    def __repr__(self):
        return f"<Feedback(id={self.id}, student_id={self.student_id}, teacher_id={self.teacher_id}, content='{self.content}', created_at='{self.created_at}')>"
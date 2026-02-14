from datetime import datetime
from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from . import Base

class Homework(Base):
    __tablename__ = 'homework'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    due_date = Column(DateTime, nullable=False)
    student_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    teacher_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    student = relationship("User", foreign_keys=[student_id])
    teacher = relationship("User", foreign_keys=[teacher_id])

    def __repr__(self):
        return f"<Homework(title={self.title}, due_date={self.due_date}, student_id={self.student_id})>"
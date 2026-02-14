from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class Achievement(Base):
    __tablename__ = 'achievements'

    id = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, ForeignKey('users.id'))
    subject = Column(String, index=True)
    score = Column(Integer)
    date = Column(String)

    student = relationship("User", back_populates="achievements")

    def __repr__(self):
        return f"<Achievement(student_id={self.student_id}, subject='{self.subject}', score={self.score}, date='{self.date}')>"
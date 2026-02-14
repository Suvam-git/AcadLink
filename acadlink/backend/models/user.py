from sqlalchemy import Column, Integer, String, Enum, ForeignKey
from sqlalchemy.orm import relationship
from backend.utils.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    password_hash = Column(String)
    role = Column(Enum('student', 'parent', 'teacher', 'admin'), index=True)

    # Relationships
    student_info = relationship("Student", back_populates="user", uselist=False)
    parent_info = relationship("Parent", back_populates="user", uselist=False)
    teacher_info = relationship("Teacher", back_populates="user", uselist=False)
    admin_info = relationship("Admin", back_populates="user", uselist=False)

class Student(Base):
    __tablename__ = 'students'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    achievements = relationship("Achievement", back_populates="student")

class Parent(Base):
    __tablename__ = 'parents'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))

class Teacher(Base):
    __tablename__ = 'teachers'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))

class Admin(Base):
    __tablename__ = 'admins'

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
from flask import Blueprint, request, jsonify
from ..models.homework import Homework
from ..models.achievement import Achievement
from ..models.feedback import Feedback
from ..models.user import User

student_bp = Blueprint('student', __name__)

@student_bp.route('/homework/<int:student_id>', methods=['GET'])
def get_homework(student_id):
    homework = Homework.query.filter_by(student_id=student_id).all()
    return jsonify([hw.to_dict() for hw in homework]), 200

@student_bp.route('/achievements/<int:student_id>', methods=['GET'])
def get_achievements(student_id):
    achievements = Achievement.query.filter_by(student_id=student_id).all()
    return jsonify([ach.to_dict() for ach in achievements]), 200

@student_bp.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    new_feedback = Feedback(student_id=data['student_id'], content=data['content'])
    new_feedback.save()
    return jsonify({"message": "Feedback submitted successfully"}), 201

@student_bp.route('/emotion', methods=['POST'])
def log_emotion():
    data = request.json
    student = User.query.get(data['student_id'])
    if student:
        student.emotion = data['emotion']
        student.save()
        return jsonify({"message": "Emotion logged successfully"}), 200
    return jsonify({"message": "Student not found"}), 404
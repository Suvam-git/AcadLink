from flask import Blueprint, request, jsonify
from models.user import User
from models.homework import Homework
from models.feedback import Feedback
from models.achievement import Achievement

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/students', methods=['GET'])
def get_students():
    students = User.query.filter_by(role='student').all()
    return jsonify([student.to_dict() for student in students])

@admin_bp.route('/homework', methods=['GET'])
def get_homework():
    homework = Homework.query.all()
    return jsonify([hw.to_dict() for hw in homework])

@admin_bp.route('/feedback', methods=['GET'])
def get_feedback():
    feedbacks = Feedback.query.all()
    return jsonify([feedback.to_dict() for feedback in feedbacks])

@admin_bp.route('/achievements', methods=['GET'])
def get_achievements():
    achievements = Achievement.query.all()
    return jsonify([achievement.to_dict() for achievement in achievements])

@admin_bp.route('/awards', methods=['GET'])
def get_awards():
    # Logic to retrieve awards data
    awards = {}  # Replace with actual award retrieval logic
    return jsonify(awards)

@admin_bp.route('/student/<int:student_id>', methods=['GET'])
def get_student(student_id):
    student = User.query.get_or_404(student_id)
    return jsonify(student.to_dict())

@admin_bp.route('/homework/<int:homework_id>', methods=['GET'])
def get_homework_by_id(homework_id):
    homework = Homework.query.get_or_404(homework_id)
    return jsonify(homework.to_dict())

@admin_bp.route('/feedback/<int:feedback_id>', methods=['GET'])
def get_feedback_by_id(feedback_id):
    feedback = Feedback.query.get_or_404(feedback_id)
    return jsonify(feedback.to_dict())

@admin_bp.route('/achievements/<int:achievement_id>', methods=['GET'])
def get_achievement_by_id(achievement_id):
    achievement = Achievement.query.get_or_404(achievement_id)
    return jsonify(achievement.to_dict())
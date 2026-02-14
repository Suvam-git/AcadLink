from flask import Blueprint, request, jsonify
from models.feedback import Feedback
from models.homework import Homework
from models.user import User

parent_bp = Blueprint('parent', __name__)

@parent_bp.route('/api/parent/progress/<student_id>', methods=['GET'])
def get_student_progress(student_id):
    student = User.query.get(student_id)
    if not student:
        return jsonify({'message': 'Student not found'}), 404
    
    homework = Homework.query.filter_by(student_id=student_id).all()
    achievements = student.achievements  # Assuming achievements is a relationship in User model

    return jsonify({
        'homework': [hw.to_dict() for hw in homework],
        'achievements': [ach.to_dict() for ach in achievements],
        'student_name': student.name
    })

@parent_bp.route('/api/parent/feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    feedback = Feedback(
        parent_id=data['parent_id'],
        student_id=data['student_id'],
        message=data['message']
    )
    feedback.save()  # Assuming save method handles database insertion

    return jsonify({'message': 'Feedback submitted successfully'}), 201

@parent_bp.route('/api/parent/notifications/<parent_id>', methods=['GET'])
def get_notifications(parent_id):
    # This would typically fetch notifications related to the parent's child
    notifications = []  # Fetch notifications from the database
    return jsonify({'notifications': notifications})
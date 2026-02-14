from flask import Blueprint, request, jsonify
from models.homework import Homework
from models.feedback import Feedback
from models.achievement import Achievement

teacher_bp = Blueprint('teacher', __name__)

@teacher_bp.route('/assignments', methods=['GET'])
def get_assignments():
    # Logic to fetch assignments for the teacher
    assignments = Homework.get_assignments_for_teacher()
    return jsonify(assignments), 200

@teacher_bp.route('/assignments', methods=['POST'])
def create_assignment():
    data = request.json
    # Logic to create a new assignment
    new_assignment = Homework.create_assignment(data)
    return jsonify(new_assignment), 201

@teacher_bp.route('/notifications', methods=['GET'])
def get_notifications():
    # Logic to fetch notifications for the teacher
    notifications = Homework.get_notifications_for_teacher()
    return jsonify(notifications), 200

@teacher_bp.route('/feedback', methods=['POST'])
def submit_feedback():
    data = request.json
    # Logic to submit feedback from teacher to admin
    feedback = Feedback.submit_feedback(data)
    return jsonify(feedback), 201

@teacher_bp.route('/students/<student_id>/achievements', methods=['GET'])
def get_student_achievements(student_id):
    # Logic to fetch achievements for a specific student
    achievements = Achievement.get_achievements_for_student(student_id)
    return jsonify(achievements), 200

@teacher_bp.route('/students/<student_id>/achievements', methods=['POST'])
def add_student_achievement(student_id):
    data = request.json
    # Logic to add an achievement for a specific student
    achievement = Achievement.add_achievement(student_id, data)
    return jsonify(achievement), 201
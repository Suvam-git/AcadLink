def calculate_free_time(student_free_time, average_assignment_time):
    return student_free_time - average_assignment_time

def validate_user_role(role):
    valid_roles = ['student', 'parent', 'teacher', 'admin']
    return role in valid_roles

def format_feedback(feedback):
    return feedback.strip()

def generate_notification(message):
    return {
        'notification': message,
        'timestamp': datetime.now().isoformat()
    }

def is_valid_email(email):
    import re
    email_regex = r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
    return re.match(email_regex, email) is not None

def calculate_student_rank(student_scores):
    return sorted(student_scores, reverse=True).index(student_scores) + 1 if student_scores else None
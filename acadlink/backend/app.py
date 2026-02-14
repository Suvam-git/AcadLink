from flask import Flask
from flask_cors import CORS
from routes.auth import auth_bp
from routes.student import student_bp
from routes.teacher import teacher_bp
from routes.admin import admin_bp
from routes.parent import parent_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth_bp, url_prefix='/auth')
app.register_blueprint(student_bp, url_prefix='/student')
app.register_blueprint(teacher_bp, url_prefix='/teacher')
app.register_blueprint(admin_bp, url_prefix='/admin')
app.register_blueprint(parent_bp, url_prefix='/parent')

if __name__ == '__main__':
    app.run(debug=True)
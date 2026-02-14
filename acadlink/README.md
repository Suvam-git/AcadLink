# AcadLink

## Overview
AcadLink is a web application designed to connect students, teachers, parents, and administrators on a unified platform. The application aims to enhance communication and efficiency in academic environments by providing real-time data and updates.

## Features
- **User Roles**: The application supports four user roles: Student, Teacher, Parent, and Administrator, each with specific functionalities and access permissions.
- **Real-Time Updates**: Users can track academic performance, homework assignments, and feedback in real-time.
- **Feedback System**: A built-in feedback mechanism allows for communication between parents, students, and teachers.
- **Emotional Check-Ins**: Students can log their feelings daily, contributing to mental health awareness.
- **Gamification**: The application includes a points system to encourage student engagement and productivity.

## Project Structure
```
acadlink
├── frontend
│   ├── assets
│   │   ├── css
│   │   ├── js
│   ├── pages
│   └── README.md
├── backend
│   ├── app.py
│   ├── config.py
│   ├── requirements.txt
│   ├── routes
│   ├── models
│   └── utils
└── README.md
```

## Frontend
The frontend is built using HTML, CSS, and JavaScript. It includes various pages for different user roles, each with specific styles and scripts.

### Setup Instructions
1. Navigate to the `frontend` directory.
2. Open `index.html` in a web browser to view the landing page.
3. Use the navigation links to access the login page and other user-specific pages.

## Backend
The backend is developed using Python and Flask. It handles user authentication, data management, and business logic.

### Setup Instructions
1. Navigate to the `backend` directory.
2. Install the required dependencies using:
   ```
   pip install -r requirements.txt
   ```
3. Run the application using:
   ```
   python app.py
   ```

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
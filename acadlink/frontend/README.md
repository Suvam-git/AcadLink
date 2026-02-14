# AcadLink Frontend Documentation

## Overview
AcadLink is a web application designed to connect students, teachers, parents, and administrators on a unified platform. This documentation provides an overview of the frontend structure, setup instructions, and usage guidelines.

## Project Structure
The frontend of the AcadLink application is organized as follows:

```
frontend/
├── assets/
│   ├── css/
│   │   ├── styles.css        # General styles for the application
│   │   ├── landing.css       # Styles for the landing page
│   │   ├── login.css         # Styles for the login page
│   │   ├── student.css       # Styles for the student page
│   │   ├── teacher.css       # Styles for the teacher page
│   │   ├── admin.css         # Styles for the admin page
│   │   └── parent.css        # Styles for the parent page
│   └── js/
│       ├── auth.js           # Authentication logic
│       ├── theme.js          # Theme toggle functionality
│       ├── student.js        # Student-specific functions
│       ├── teacher.js        # Teacher-specific functions
│       ├── admin.js          # Admin-specific functions
│       └── parent.js         # Parent-specific functions
├── pages/
│   ├── index.html            # Landing page
│   ├── login.html            # Login page
│   ├── student.html          # Student dashboard
│   ├── teacher.html          # Teacher dashboard
│   ├── admin.html            # Admin dashboard
│   └── parent.html           # Parent dashboard
└── README.md                 # Frontend documentation
```

## Setup Instructions
1. **Clone the Repository**
   Clone the AcadLink repository to your local machine using:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the Frontend Directory**
   Change your working directory to the frontend folder:
   ```
   cd acadlink/frontend
   ```

3. **Open the Application**
   Open the `index.html` file in your preferred web browser to view the landing page.

## Usage
- **Landing Page**: Provides an overview of the application and navigation to other sections.
- **Login Page**: Users can authenticate based on their roles (Student, Teacher, Parent, Administrator).
- **Dashboard Pages**: Each user role has a dedicated dashboard with functionalities tailored to their needs:
  - **Student Dashboard**: View homework, achievements, and emotional check-ins.
  - **Teacher Dashboard**: Manage classes, assignments, and notifications.
  - **Admin Dashboard**: Access student data and manage the system.
  - **Parent Dashboard**: Monitor child's progress and provide feedback.

## Theme Toggle
The application includes a theme toggle feature that allows users to switch between light and dark modes for a better user experience.

## Contribution
Contributions to the AcadLink project are welcome. Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
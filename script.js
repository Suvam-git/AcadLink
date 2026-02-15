// Check if admin is logged in
        function checkAdminAccess() {
            if (localStorage.getItem('adminLoggedIn') !== 'true') {
                window.location.href = 'login.html';
            }
        }

        // Initialize database
        function initializeDatabase() {
            if (!localStorage.getItem('acadlinkUsers')) {
                const defaultUsers = {
                    students: [],
                    teachers: [],
                    parents: []
                };
                localStorage.setItem('acadlinkUsers', JSON.stringify(defaultUsers));
            }
        }

        // Add User
        function addUser(event) {
            event.preventDefault();

            const userRole = document.getElementById('userRole').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Create user object
            const newUser = {
                id: Date.now(),
                firstName,
                lastName,
                email,
                phone,
                username,
                password
            };

            // Get existing data
            const users = JSON.parse(localStorage.getItem('acadlinkUsers'));

            // Add user to appropriate role
            if (userRole === 'student') {
                users.students.push(newUser);
            } else if (userRole === 'teacher') {
                users.teachers.push(newUser);
            } else if (userRole === 'parent') {
                users.parents.push(newUser);
            }

            // Save to localStorage
            localStorage.setItem('acadlinkUsers', JSON.stringify(users));

            // Show success message
            showSuccessMessage(`${firstName} ${lastName} added as ${userRole}!`);

            // Reset form
            document.getElementById('addUserForm').reset();

            // Reload display
            displayUsers();
        }

        // Delete User
        function deleteUser(role, userId) {
            if (confirm('Are you sure you want to delete this user?')) {
                const users = JSON.parse(localStorage.getItem('acadlinkUsers'));
                
                if (role === 'student') {
                    users.students = users.students.filter(u => u.id !== userId);
                } else if (role === 'teacher') {
                    users.teachers = users.teachers.filter(u => u.id !== userId);
                } else if (role === 'parent') {
                    users.parents = users.parents.filter(u => u.id !== userId);
                }

                localStorage.setItem('acadlinkUsers', JSON.stringify(users));
                showSuccessMessage('User deleted successfully!');
                displayUsers();
            }
        }

        // Display Users
        function displayUsers() {
            const users = JSON.parse(localStorage.getItem('acadlinkUsers'));

            // Update student display
            displayRoleUsers('students', 'studentsList', 'studentTableBody', 'studentBadge', 'studentCount');

            // Update teacher display
            displayRoleUsers('teachers', 'teachersList', 'teacherTableBody', 'teacherBadge', 'teacherCount');

            // Update parent display
            displayRoleUsers('parents', 'parentsList', 'parentTableBody', 'parentBadge', 'parentCount');
        }

        function displayRoleUsers(roleKey, listContainerId, tableBodyId, badgeId, countId) {
            const users = JSON.parse(localStorage.getItem('acadlinkUsers'));
            const roleUsers = users[roleKey];
            const container = document.getElementById(listContainerId);
            const tableBody = document.getElementById(tableBodyId);
            const badge = document.getElementById(badgeId);
            const countBadge = document.getElementById(countId);

            badge.textContent = roleUsers.length;
            countBadge.textContent = roleUsers.length;

            if (roleUsers.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">
                            ${roleKey === 'students' ? '📚' : roleKey === 'teachers' ? '🎓' : '👤'}
                        </div>
                        <p>No ${roleKey} added yet. Add your first ${roleKey.slice(0, -1)}!</p>
                    </div>
                `;
            } else {
                let tableHTML = `
                    <table class="users-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                `;

                roleUsers.forEach(user => {
                    tableHTML += `
                        <tr>
                            <td class="user-name">${user.firstName} ${user.lastName}</td>
                            <td class="user-email">${user.email}</td>
                            <td>${user.username}</td>
                            <td>${user.phone || '-'}</td>
                            <td>
                                <button class="delete-btn" onclick="deleteUser('${roleKey.slice(0, -1)}', ${user.id})">
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    `;
                });

                tableHTML += `
                        </tbody>
                    </table>
                `;

                container.innerHTML = tableHTML;
            }
        }

        // Show Messages
        function showSuccessMessage(message) {
            const successMsg = document.getElementById('successMsg');
            successMsg.textContent = '✓ ' + message;
            successMsg.style.display = 'block';
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 3000);
        }

        function showErrorMessage(message) {
            const errorMsg = document.getElementById('errorMsg');
            errorMsg.textContent = '✗ ' + message;
            errorMsg.style.display = 'block';
            setTimeout(() => {
                errorMsg.style.display = 'none';
            }, 3000);
        }

        // Logout
        function logout() {
            localStorage.removeItem('adminLoggedIn');
            localStorage.removeItem('adminEmail');
            localStorage.removeItem('adminRole');
            localStorage.removeItem('rememberAdmin');
            window.location.href = 'login.html';
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            checkAdminAccess();
            initializeDatabase();
            displayUsers();
        });
              // Open Forgot Password Modal
        function openForgotModal() {
            document.getElementById('forgotModal').style.display = 'block';
            document.getElementById('forgotForm').style.display = 'block';
            document.getElementById('successMsg').style.display = 'none';
        }

        // Close Forgot Password Modal
        function closeForgotModal() {
            document.getElementById('forgotModal').style.display = 'none';
            document.getElementById('forgotForm').reset();
            document.getElementById('forgotForm').style.display = 'block';
            document.getElementById('successMsg').style.display = 'none';
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('forgotModal');
            if (event.target == modal) {
                closeForgotModal();
            }
        }

        // Handle Login
        function handleLogin(event) {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.querySelector('input[name="remember"]').checked;

            // Check if Admin Login
            const adminEmail = 'admin@acadlink.com';
            const adminPassword = 'Admin123456';
            
            if (email === adminEmail && password === adminPassword) {
                localStorage.setItem('adminLoggedIn', 'true');
                localStorage.setItem('adminEmail', email);
                if (remember) {
                    localStorage.setItem('rememberAdmin', 'true');
                }
                window.location.href = 'admin.html';
                return;
            }
            
            // Check users added by admin
            const users = JSON.parse(localStorage.getItem('acadlinkUsers') || '{"students": [], "teachers": [], "parents": []}');
            
            let foundUser = null;
            let userRole = null;
            
            // Search in all user categories
            for (const role of ['students', 'teachers', 'parents']) {
                const user = users[role].find(u => 
                    (u.email === email || u.username === email) && u.password === password
                );
                if (user) {
                    foundUser = user;
                    userRole = role.slice(0, -1); // Remove 's' from role
                    break;
                }
            }
            
            if (foundUser) {
                localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
                localStorage.setItem('userRole', userRole);
                if (remember) {
                    localStorage.setItem('rememberUser', 'true');
                }
                alert(`Welcome ${foundUser.firstName}! Login successful.`);
                // Redirect to user dashboard (you can create this later)
                // window.location.href = 'user-dashboard.html';
            } else {
                alert('No account like that is found.');
            }
        }

        // Handle Forgot Password
        function handleForgotPassword(event) {
            event.preventDefault();
            
            const formData = {
                email: document.getElementById('forgotEmail').value,
                type: document.getElementById('forgotType').value
            };

            console.log('Recovery request:', formData);
            
            // Hide form and show success message
            document.getElementById('forgotForm').style.display = 'none';
            document.getElementById('successMsg').style.display = 'block';
            
            // Here you would send the data to your backend/admin
            // After 3 seconds, close the modal
            setTimeout(() => {
                closeForgotModal();
            }, 3000);
        }

        // Add Enter key listener for password field
        document.getElementById('password').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                document.getElementById('loginForm').dispatchEvent(new Event('submit'));
            }
        });


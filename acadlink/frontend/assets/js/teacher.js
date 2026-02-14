document.addEventListener("DOMContentLoaded", function() {
    const notifyLowLoad = () => {
        // Logic to notify teachers when class load is low
        const notification = document.createElement("div");
        notification.className = "notification";
        notification.innerText = "Class load is low. Please check your assignments.";
        document.body.appendChild(notification);
    };

    const checkInactiveStatus = () => {
        // Logic to notify teachers if they are inactive
        const inactiveNotification = document.createElement("div");
        inactiveNotification.className = "notification";
        inactiveNotification.innerText = "You have been inactive for a while. Please engage with your students.";
        document.body.appendChild(inactiveNotification);
    };

    const addPracticalMarks = (studentId, marks) => {
        // Logic to add practical marks for students
        fetch(`/api/teacher/addMarks/${studentId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ marks })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Marks added successfully!");
            } else {
                alert("Error adding marks.");
            }
        })
        .catch(error => console.error('Error:', error));
    };

    const streakNotification = () => {
        // Logic to notify students about their streaks
        const streakMessage = document.createElement("div");
        streakMessage.className = "streak-notification";
        streakMessage.innerText = "Keep up the good work! You're on a streak!";
        document.body.appendChild(streakMessage);
    };

    // Example usage
    notifyLowLoad();
    checkInactiveStatus();
    // Call addPracticalMarks with appropriate parameters when needed
    // Call streakNotification when a student achieves a streak
});
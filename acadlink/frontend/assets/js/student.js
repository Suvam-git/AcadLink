document.addEventListener("DOMContentLoaded", function() {
    const homeworkList = document.getElementById("homework-list");
    const emotionInput = document.getElementById("emotion-input");
    const submitEmotionButton = document.getElementById("submit-emotion");
    const feedbackForm = document.getElementById("feedback-form");
    const feedbackInput = document.getElementById("feedback-input");

    // Fetch homework and achievements on page load
    fetchHomeworkAndAchievements();

    // Submit emotion check-in
    submitEmotionButton.addEventListener("click", function() {
        const emotion = emotionInput.value;
        submitEmotion(emotion);
    });

    // Submit feedback
    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const feedback = feedbackInput.value;
        submitFeedback(feedback);
    });

    function fetchHomeworkAndAchievements() {
        // Fetch homework and achievements from the backend
        fetch('/api/student/homework')
            .then(response => response.json())
            .then(data => {
                displayHomework(data.homework);
                displayAchievements(data.achievements);
            })
            .catch(error => console.error('Error fetching homework:', error));
    }

    function displayHomework(homework) {
        homeworkList.innerHTML = '';
        homework.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.subject}: ${item.description} (Due: ${item.dueDate})`;
            homeworkList.appendChild(listItem);
        });
    }

    function displayAchievements(achievements) {
        const achievementsContainer = document.getElementById("achievements");
        achievementsContainer.innerHTML = '';
        achievements.forEach(achievement => {
            const achievementItem = document.createElement("div");
            achievementItem.textContent = achievement;
            achievementsContainer.appendChild(achievementItem);
        });
    }

    function submitEmotion(emotion) {
        // Send the emotion to the backend
        fetch('/api/student/emotion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ emotion })
        })
        .then(response => {
            if (response.ok) {
                alert('Emotion submitted successfully!');
            } else {
                alert('Error submitting emotion.');
            }
        })
        .catch(error => console.error('Error submitting emotion:', error));
    }

    function submitFeedback(feedback) {
        // Send feedback to the backend
        fetch('/api/student/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ feedback })
        })
        .then(response => {
            if (response.ok) {
                alert('Feedback submitted successfully!');
                feedbackInput.value = ''; // Clear the input
            } else {
                alert('Error submitting feedback.');
            }
        })
        .catch(error => console.error('Error submitting feedback:', error));
    }
});
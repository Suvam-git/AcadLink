document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved user preference, if any, on initial load
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        // Default to light theme
        body.classList.add('light-theme');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        // Save the current theme in local storage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark-theme');
        } else {
            localStorage.setItem('theme', 'light-theme');
        }
    });
});
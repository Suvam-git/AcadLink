document.addEventListener("DOMContentLoaded", function() {
    const studentDataTable = document.getElementById("student-data");
    const awardSystemTable = document.getElementById("award-system");
    
    function fetchStudentData() {
        fetch('/api/admin/students')
            .then(response => response.json())
            .then(data => {
                data.forEach(student => {
                    const row = studentDataTable.insertRow();
                    row.insertCell(0).innerText = student.name;
                    row.insertCell(1).innerText = student.class;
                    row.insertCell(2).innerText = student.section;
                    row.insertCell(3).innerText = student.achievements;
                });
            })
            .catch(error => console.error('Error fetching student data:', error));
    }

    function fetchAwardSystemData() {
        fetch('/api/admin/awards')
            .then(response => response.json())
            .then(data => {
                data.forEach(award => {
                    const row = awardSystemTable.insertRow();
                    row.insertCell(0).innerText = award.studentName;
                    row.insertCell(1).innerText = award.class;
                    row.insertCell(2).innerText = award.section;
                    row.insertCell(3).innerText = award.awardType;
                });
            })
            .catch(error => console.error('Error fetching award system data:', error));
    }

    function init() {
        fetchStudentData();
        fetchAwardSystemData();
    }

    init();
});
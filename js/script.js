// Print
document.getElementById('print-button').addEventListener('click', () => {
    document.getElementById('new-button').style.display = 'none';
    document.getElementById('print-button').style.display = 'none';
    window.print();
});

// Data Transfer
document.getElementById('submit-button').addEventListener('click', () => {
    document.getElementById('course-title-out').innerText = document.getElementById('course-title-in').value;
    document.getElementById('course-title-in').value = '';

    document.getElementById('content-type-out').innerText = document.getElementById('content-type-in').value;
    document.getElementById('content-type-in').value = '';

    document.getElementById('course-code-out').innerText = document.getElementById('course-code-in').value;
    document.getElementById('course-code-in').value = '';

    document.getElementById('student-name-out').innerText = document.getElementById('student-name-in').value;
    document.getElementById('student-name-in').value = '';

    document.getElementById('reg-out').innerText = document.getElementById('reg-in').value;
    document.getElementById('reg-in').value = '';

    document.getElementById('roll-out').innerText = document.getElementById('roll-in').value;
    document.getElementById('roll-in').value = '';

    document.getElementById('batch-out').innerText = document.getElementById('batch-in').value;
    document.getElementById('batch-in').value = '';

    document.getElementById('semester-out').innerText = document.getElementById('semester-in').value;
    document.getElementById('semester-in').value = '';

    document.getElementById('teacher-out').innerText = document.getElementById('teacher-in').value;
    document.getElementById('teacher-in').value = '';
    document.getElementById('designation-out').innerText = document.getElementById('designation-in').value;
    document.getElementById('designation-in').value = '';

    document.getElementById('date-out').innerText = document.getElementById('date-in').value;
    document.getElementById('date-in').value = '';
});
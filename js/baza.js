// Функция для загрузки учеников из localStorage
function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentList = document.getElementById('studentList').getElementsByTagName('tbody')[0];

    studentList.innerHTML = ''; // очищаем таблицу

    students.forEach((student, index) => {
        const row = studentList.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.dateOfBirth}</td>
        `;
    });
}

// Если это страница для добавления ученика
if (document.getElementById('studentForm')) {
    const form = document.getElementById('studentForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const grade = document.getElementById('grade').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;

        if (name && grade && dateOfBirth) {
            const students = JSON.parse(localStorage.getItem('students')) || [];

            const newStudent = {
                name,
                grade,
                dateOfBirth
            };

            students.push(newStudent);
            localStorage.setItem('students', JSON.stringify(students));

            // Очищаем форму
            form.reset();
        }
    });
}

// Если это страница для отображения учеников, загружаем их
if (document.getElementById('studentList')) {
    loadStudents(); // Первоначальная загрузка

    // Обновляем список учеников при нажатии на кнопку
    const reloadButton = document.getElementById('reloadButton');
    reloadButton.addEventListener('click', loadStudents);
}

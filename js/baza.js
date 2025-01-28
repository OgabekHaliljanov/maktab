// Функция для загрузки студентов из localStorage
function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentList = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    studentList.innerHTML = ''; // Очищаем таблицу

    students.forEach((student, index) => {
        const row = studentList.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${student.photo}" alt="Фото" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%;"></td>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.dateOfBirth}</td>
        `;
    });
}

// Если эта страница для добавления ученика
if (document.getElementById('studentForm')) {
    const form = document.getElementById('studentForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const name = document.getElementById('name').value;
        const grade = document.getElementById('grade').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const photoInput = document.getElementById('photo');
        const photoFile = photoInput.files[0];

        if (name && grade && dateOfBirth && photoFile) {
            const students = JSON.parse(localStorage.getItem('students')) || [];
            
            // Создаём URL для фото
            const photoURL = URL.createObjectURL(photoFile);

            const newStudent = { name, grade, dateOfBirth, photo: photoURL };
            students.push(newStudent);
            localStorage.setItem('students', JSON.stringify(students)); // Сохраняем список студентов в localStorage

            // Очищаем форму
            form.reset();
        } else {
            alert("Пожалуйста, заполните все поля.");
        }
    });
}

// Загружаем студентов при загрузке страницы
document.addEventListener('DOMContentLoaded', loadStudents);

// Функция для загрузки студентов из localStorage
function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const studentList = document.getElementById('studentList').getElementsByTagName('tbody')[0];
    studentList.innerHTML = ''; // Очищаем таблицу

    students.forEach((student, index) => {
        const row = studentList.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${student.photo}" alt="Фото" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%;"></td>
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.dateOfBirth}</td>
        `;
    });
}

// Загружаем студентов при загрузке страницы
document.addEventListener('DOMContentLoaded', loadStudents);

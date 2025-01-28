// nav menu style
var nav = $("#navbarSupportedContent");
var btn = $(".custom_menu-btn");
btn.click
btn.click(function (e) {

    e.preventDefault();
    nav.toggleClass("lg_nav-toggle");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
});


function getCurrentYear() {
    var d = new Date();
    var currentYear = d.getFullYear()

    $("#displayDate").html(currentYear);
}

getCurrentYear();
function checkPassword(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const password = document.getElementById('password').value;

    // Проверяем, что пароль равен "123"
    if (password === "123") {
      window.location.href = "student.html"; // Перенаправление на другую страницу
    } else {
      alert("Неверный пароль! Попробуйте снова.");
    }
  }
  // Находим все изображения
const images = document.querySelectorAll('.ser img');

// Добавляем обработчик клика
images.forEach((img) => {
    img.addEventListener('click', (e) => {
        // Удаляем активное состояние у всех изображений
        images.forEach((otherImg) => {
            otherImg.classList.remove('active');
        });

        // Переключаем активное состояние текущего изображения
        img.classList.toggle('active');
    });
});

// Убираем увеличенное изображение при клике вне его
document.addEventListener('click', (e) => {
    if (!e.target.closest('.ser img')) {
        images.forEach((img) => img.classList.remove('active'));
    }
});

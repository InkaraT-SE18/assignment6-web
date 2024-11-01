const navbarSound = document.getElementById("nav-sound");
// Функции для воспроизведения звуков
function playNavbarSound() {
    navbarSound.currentTime = 0;
    navbarSound.play();
}

// Добавляем событие для всех ссылок в навбаре
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", playNavbarSound);
});

 function displayCustomAlert(message) {
            // Устанавливаем текст сообщения
            document.getElementById('alertMessage').textContent = message;

            // Показываем затемнение и кастомный алерт
            document.getElementById('overlay').style.display = 'flex';
    // Закрытие кастомного алерта по нажатию на кнопку
            document.getElementById('closeButton').addEventListener('click', function() {
                document.getElementById('overlay').style.display = 'none';
            });
        }

        // Функция для показа приветствия на основе времени
        function displayGreeting() {
            const now = new Date();
            const hour = now.getHours();
            let greeting;

            if (hour < 12) {
                greeting = "Good morning!";
            } else if (hour < 18) {
                greeting = "Good afternoon!";
            }else {
                greeting = "Good evening!";
            }
            // Отображаем кастомный алерт с приветствием
            displayCustomAlert(greeting);
        }

        // Показываем алерт при загрузке страницы
        window.onload = displayGreeting;
 // Массив с URL страниц
const pages = ['section1.html', 'section2.html', 'section3.html','section4.html','section5.html'];

// Находим текущий индекс страницы в массиве
let currentPage = pages.indexOf(window.location.pathname.split('/').pop());

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Переход к следующей странице, если это возможно
        if (currentPage < pages.length - 1) {
            currentPage++;
            window.location.href = pages[currentPage];
        }
    } else if (event.key === 'ArrowLeft') {
        // Переход к предыдущей странице, если это возможно
        if (currentPage > 0) {
            currentPage--;
            window.location.href = pages[currentPage];
        }
    }
});

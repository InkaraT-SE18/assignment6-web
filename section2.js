
const clickSound = document.getElementById("click-button");

// Функция для воспроизведения звука
function playSound() {
    clickSound.currentTime = 0; // Сбрасываем звук к началу, если он уже играет
    clickSound.play();
}
document.getElementById("click1").addEventListener("click", playSound);
document.getElementById("click2").addEventListener("click", playSound);


    const colors = ['#102827', '#160808', '#151B2A', '#390000', '#062819'];

        function changeBackgroundColor() {
            let randomIndex = Math.floor(Math.random() * colors.length);

            document.body.style.backgroundColor = colors[randomIndex];
        }
const pages = ['section1.html', 'section2.html', 'section3.html','section4.html','section5.html'];

// Находим текущий индекс страницы в массиве
let currentPage = pages.indexOf(window.location.pathname.split('/').pop());
setTimeout(currentPage,5000);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Переход к следующей странице, если это возможно
        if (currentPage < pages.length - 1) {
            setTimeout(window.location.href,5000);
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
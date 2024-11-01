const clickSound = document.getElementById("click-button");
function playSound() {
    clickSound.currentTime = 0; // Сбрасываем звук к началу, если он уже играет
    clickSound.play();
}
document.getElementById('showTimeButton').addEventListener('click', function() {
            const currentTime = new Date().toLocaleTimeString();
            document.getElementById('timeDisplay').textContent = `Current Time: ${currentTime}`;
            document.getElementById('showTimeButton').style.display = 'none';
        });
document.getElementById("click1").addEventListener("click", playSound);
document.getElementById("showTimeButton").addEventListener("click", playSound);
const pages = ['section1.html', 'section2.html', 'section3.html','section4.html','section5.html'];

// Находим текущий индекс страницы в массиве
let currentPage = pages.indexOf(window.location.pathname.split('/').pop());

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (currentPage < pages.length - 1) {
            currentPage++;
            window.location.href = pages[currentPage];
        }
    } else if (event.key === 'ArrowLeft') {
        if (currentPage > 0) {
            currentPage--;
            window.location.href = pages[currentPage];
        }
    }
});
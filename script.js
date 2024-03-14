document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var images = [
        "url('image/10.png')",
        "url('image/12.png')",
        "url('image/11.png')"
    ];
    var currentIndex = 0;

    function changeBackgroundImage() {
        container.style.opacity = '0'; // Сделать элемент невидимым для начала анимации
        setTimeout(function() {
            if (container) {
                container.style.backgroundImage = images[currentIndex];
                container.style.opacity = '1'; // Вернуть элемент к полной видимости
            }
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
        }, 1000); // Задержка должна соответствовать продолжительности анимации
    }

    if (container) {
        setInterval(changeBackgroundImage, 5000); // Увеличьте интервал, чтобы учесть время анимации
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const dealItems = document.querySelectorAll('.deal-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let counter = 0;
    const size = dealItems[0].clientWidth + 15; // width + margin-right

    function updateCarousel() {
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    nextBtn.addEventListener('click', () => {
        if (counter >= dealItems.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) {
            counter = dealItems.length - 1;
        } else {
            counter--;
        }
        updateCarousel();
    });
});

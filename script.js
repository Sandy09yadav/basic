document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const input = document.getElementById('firstName');
    const container = input.closest('.floating-input');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (input.value.trim() === '') {
            container.classList.add('error');
        } else {
            container.classList.remove('error');
            alert("Form submitted successfully!");
        }
    });
});

const wrapper = document.querySelector('.testimonial-wrapper');
const dots = document.querySelectorAll('.dot');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let index = 0;

function updateSlider() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

arrowLeft.addEventListener('click', () => {
    index = (index - 1 + dots.length) % dots.length;
    updateSlider();
});

arrowRight.addEventListener('click', () => {
    index = (index + 1) % dots.length;
    updateSlider();
});

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        updateSlider();
    });
});

const playButton = document.getElementById('playButton');
const videoPopup = document.getElementById('videoPopup');
const closeButton = document.getElementById('closeButton');

playButton.addEventListener('click', function () {
    videoPopup.style.display = 'flex';
});

closeButton.addEventListener('click', function () {
    videoPopup.style.display = 'none';
    const video = videoPopup.querySelector('video');
    video.pause();
    video.currentTime = 0;
});

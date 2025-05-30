document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        // Get all inputs and selects inside the form
        const fields = form.querySelectorAll('input[required], select');

        fields.forEach((field) => {
            const container = field.closest('.floating-input');

            if (!field.value.trim()) {
                container.classList.add('error');
                isValid = false;
            } else {
                container.classList.remove('error');
            }
        });

        if (isValid) {
            alert('Form submitted successfully!');
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

const playBtn = document.getElementById("playButton");
const popup = document.getElementById("videoPopup");
const closeBtn = document.getElementById("closeButton");

playBtn.addEventListener("click", () => {
    popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
    const video = popup.querySelector("video");
    video.pause();
    video.currentTime = 0;
});

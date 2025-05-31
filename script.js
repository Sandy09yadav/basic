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
            window.location.href = 'thankyou.html';
        }
    });

    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const closeDrawer = document.getElementById('closeDrawer');
    const drawerOverlay = document.getElementById('drawerOverlay');

    function openDrawer() {
        mobileDrawer.style.display = 'block';
        document.body.classList.add('drawer-open');
        // Add active class after a small delay for animation
        setTimeout(() => {
            mobileDrawer.classList.add('active');
        }, 10);
    }

    function closeDrawerFunc() {
        mobileDrawer.classList.remove('active');
        document.body.classList.remove('drawer-open');
        // Hide after animation completes
        setTimeout(() => {
            mobileDrawer.style.display = 'none';
        }, 300);
    }

    hamburgerBtn.addEventListener('click', openDrawer);
    closeDrawer.addEventListener('click', closeDrawerFunc);
    drawerOverlay.addEventListener('click', closeDrawerFunc);

    // Close drawer when clicking on nav links
    const drawerNavLinks = document.querySelectorAll('.drawer-nav a');
    drawerNavLinks.forEach(link => {
        link.addEventListener('click', closeDrawerFunc);
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

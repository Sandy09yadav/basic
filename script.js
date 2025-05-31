/**
 * Main application module
 * Handles form validation, mobile navigation, and video popup functionality
 */
const App = {
    /**
     * Initialize the application
     */
    init() {
        this.initFormValidation();
        this.initMobileNavigation();
        this.initTestimonialSlider();
        this.initVideoPopup();
    },

    /**
     * Form validation functionality
     */
    initFormValidation() {
        const form = document.getElementById('myForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const isValid = this.validateForm(form);
            
            if (isValid) {
                try {
                    window.location.href = 'thankyou.html';
                } catch (error) {
                    console.error('Navigation error:', error);
                    // Fallback for older browsers
                    window.location.replace('thankyou.html');
                }
            }
        });
    },

    /**
     * Validate form fields
     * @param {HTMLFormElement} form - The form to validate
     * @returns {boolean} Whether the form is valid
     */
    validateForm(form) {
        let isValid = true;
        const fields = form.querySelectorAll('input[required], select[required]');

        fields.forEach((field) => {
            const container = field.closest('.floating-input');
            if (!container) return;

            if (!field.value.trim()) {
                container.classList.add('error');
                isValid = false;
            } else {
                container.classList.remove('error');
            }
        });

        return isValid;
    },

    /**
     * Mobile navigation functionality
     */
    initMobileNavigation() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        const mobileDrawer = document.getElementById('mobileDrawer');
        const closeDrawer = document.getElementById('closeDrawer');
        const drawerOverlay = document.getElementById('drawerOverlay');

        if (!hamburgerBtn || !mobileDrawer || !closeDrawer || !drawerOverlay) return;

        const openDrawer = () => {
            mobileDrawer.style.display = 'block';
            document.body.classList.add('drawer-open');
            requestAnimationFrame(() => {
                mobileDrawer.classList.add('active');
            });
        };

        const closeDrawerFunc = () => {
            mobileDrawer.classList.remove('active');
            document.body.classList.remove('drawer-open');
            setTimeout(() => {
                mobileDrawer.style.display = 'none';
            }, 300);
        };

        hamburgerBtn.addEventListener('click', openDrawer);
        closeDrawer.addEventListener('click', closeDrawerFunc);
        drawerOverlay.addEventListener('click', closeDrawerFunc);

        // Close drawer when clicking on nav links
        const drawerNavLinks = document.querySelectorAll('.drawer-nav a');
        drawerNavLinks.forEach(link => {
            link.addEventListener('click', closeDrawerFunc);
        });
    },

    /**
     * Testimonial slider functionality
     */
    initTestimonialSlider() {
        const wrapper = document.querySelector('.testimonial-wrapper');
        const dots = document.querySelectorAll('.dot');
        const arrowLeft = document.querySelector('.arrow-left');
        const arrowRight = document.querySelector('.arrow-right');

        if (!wrapper || !dots.length || !arrowLeft || !arrowRight) return;

        let index = 0;

        const updateSlider = () => {
            wrapper.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        };

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
    },

    /**
     * Video popup functionality
     */
    initVideoPopup() {
        const playBtn = document.getElementById("playButton");
        const popup = document.getElementById("videoPopup");
        const closeBtn = document.getElementById("closeButton");
        const video = popup?.querySelector("video");

        if (!playBtn || !popup || !closeBtn || !video) return;

        playBtn.addEventListener("click", () => {
            popup.style.display = "flex";
        });

        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
            video.pause();
            video.currentTime = 0;
        });

        // Close popup when clicking outside
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                closeBtn.click();
            }
        });

        // Close popup on escape key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && popup.style.display === "flex") {
                closeBtn.click();
            }
        });
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());

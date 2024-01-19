document.addEventListener('DOMContentLoaded', function () {
    var textToType = "Compliance at Convenience";
    var titleElement = document.getElementById('title');

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            titleElement.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 1000);
        }
    }

    function startTextAnimation() {
        if (textToType) {
            typeWriter(textToType, 0, function () {
                // Additional actions after typing is complete
                setTimeout(function () {
                    // Start the typing animation again after a delay
                    titleElement.innerHTML = ''; // Clear the text
                    startTextAnimation();
                }, 1000);
            });
        }
    }

    startTextAnimation();
});
document.addEventListener('DOMContentLoaded', function () {
    var centerHeading = document.querySelector('.additional-heading');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            centerHeading.style.opacity = 1;
        } else {
            centerHeading.style.opacity = 0;
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.image-slider');

    function startSlider() {
        setInterval(() => {
            const imageWidth = document.querySelector('.image-slider img').clientWidth;
            slider.style.transition = 'transform 0.5s ease-in-out';
            slider.style.transform = `translateX(${-imageWidth}px)`;

            setTimeout(() => {
                slider.appendChild(slider.firstElementChild);
                slider.style.transition = 'none';
                slider.style.transform = 'translateX(0)';
            }, 500); // Transition duration
        }, 3000); // Change slide every 3 seconds (adjust as needed)
    }

    startSlider();
});



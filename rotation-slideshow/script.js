const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
let activeSlide = 0;

slider.addEventListener("animationiteration", () => {
    changeSlide();
});

function changeSlide() {
    slides[activeSlide].classList.remove("visible");

    activeSlide++;

    if(activeSlide >= slides.length) {
        activeSlide = 0;
    }

    slides[activeSlide].classList.add("visible");
}

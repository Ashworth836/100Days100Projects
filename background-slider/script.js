
const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

// Initial active slide index
let activeSlide = 0;

// Event Listeners
leftArrow.addEventListener("click", handleArrowClick);
rightArrow.addEventListener("click", handleArrowClick);

// Event Handler Function
function handleArrowClick() {
    // Determine the direction of the arrow click and update the active slide accordingly
    updateActiveSlide(this.id === "right" ? 1 : -1);
    // Update the background and apply the active class to the slide
    updateBackgroundAndActiveSlide();
}
  
// Update Active Slide Function
function updateActiveSlide(increment) {
    // Calculate the new active slide index, ensuring it stays within the valid range
    activeSlide = (activeSlide + increment + slides.length) % slides.length;
}

// Update Background and Active Slide Function
function updateBackgroundAndActiveSlide() {
    // Set the background of the body based on the current active slide
    setBgToBody();
    // Apply the "active" class to the current active slide
    setActiveSlide();
}

// Set Background Function
function setBgToBody() {
    // Set the background image of the body based on the current active slide
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Set Active Slide Function
function setActiveSlide() {
    // Remove the "active" class from all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    // Add the "active" class to the current active slide
    slides[activeSlide].classList.add("active");
}
  
// Get the progress bar, circles, and navigation buttons
const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

// Initialize the current active circle
let currentActive = 1;

// Event listener for the previous button
prev.addEventListener("click", () => {
    // Decrease the currentActive value
    updateCurrentActive(-1);
    // Update the display
    update();
});

// Event listener for the next button
next.addEventListener("click", () => {
    // Increase the currentActive value
    updateCurrentActive(1);
    // Update the display
    update();
});

// Function to update the currentActive value while keeping it within a valid range
function updateCurrentActive(increment) {
    currentActive += increment;
    // Ensure currentActive stays within the valid range (1 to circles.length)
    currentActive = Math.min(Math.max(currentActive, 1), circles.length);
}

// Function to update the display
function update() {
    // Update the appearance of each circle based on the currentActive value
    circles.forEach((circle, idx) => {
        circle.classList.toggle("active", idx < currentActive);
    });

    // Calculate the width of the progress bar based on the currentActive value
    progress.style.width = `${(currentActive - 1) / (circles.length - 1) * 100}%`;

    // Disable or enable the prev and next buttons based on the currentActive value
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}

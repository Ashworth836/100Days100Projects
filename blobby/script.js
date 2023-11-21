// Get the reference to the DOM element with the class "box"
const box = document.querySelector(".box");

// Set an interval to repeatedly call the setBorderRadius function every 300 milliseconds
setInterval(setBorderRadius, 300);

// Function to set random border radius values to the "box" element
function setBorderRadius() {
    // Set the CSS custom properties with generated border radius values
    box.style.setProperty("--br-blobby", generateBorderRadiusValue());
    box.style.setProperty("--br-blobby-after", generateBorderRadiusValue());
    box.style.setProperty("--br-blobby-before", generateBorderRadiusValue());
}

// Function to generate a random border radius value
function generateBorderRadiusValue() {
    // Use getRandomValue function to generate random values for each part of the border radius
    return `${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}% / ${getRandomValue()}% ${getRandomValue()}% ${getRandomValue()}%`;
}

// Function to generate a random value between 50 and 99 (inclusive)
function getRandomValue() {
    return Math.floor(Math.random() * 50) + 50;
}

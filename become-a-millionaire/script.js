// Get references to HTML elements
const scoreElement = document.getElementById("score");
const buttonElement = document.getElementById("button");
const screenElement = document.getElementById("screen");

// Add a click event listener to the button
buttonElement.addEventListener("click", increaseScore);

// Initialize variables
let score = 0;
let fillScreenScore = -1;
let icons;

// Function to increase the score
function increaseScore() {
    scoreElement.textContent = ++score;

    // Check if the score is greater than 100 to trigger the screen fill
    if (score > 100) {
        fillScreen();
    }
}

// Function to fill the screen with icons
function fillScreen() {
    // Display the screen element
    screenElement.style.display = "block";
    screenElement.innerHTML = `
        <div class="congrats">
            <h1>
                Congratulations <br> You are a millionaire <br> <i class="fas fa-smile"></i>
            </h1>
        </div>
    `;

    // Calculate the number of icons to display based on the window dimensions
    const nrOfIcons = Math.ceil(window.innerWidth / 24) * Math.ceil(window.innerHeight / 20);

    // Generate and add the icons to the screen
    screenElement.insertAdjacentHTML(
        "beforeend",
        new Array(nrOfIcons).fill('<i class="fas fa-money-bill-wave hide"></i>').join('')
    );

    // Select all the icons for further manipulation
    icons = document.querySelectorAll(".fa-money-bill-wave");

    // Start showing the money icons
    showMoney();
}

// Function to progressively show money icons
function showMoney() {
    // Check if there are more icons to show
    if (fillScreenScore < icons.length - 1) {
        // Use a timeout to gradually show the icons
        setTimeout(showMoney, 1);
        icons[++fillScreenScore].classList.remove("hide");
    }
}

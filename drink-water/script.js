const liters = document.getElementById("liters");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");
const smallCups = document.querySelectorAll(".cup-small");

// Initialize the UI with the correct cup status
updateBigCup();

// Attach click event listeners to small cups
smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx));
});

// Function to update the highlighted small cups based on the clicked cup
function highlightCups(idx) {
    // Adjust the index if the clicked cup is already full
    if (smallCups[idx].classList.contains("full") && !smallCups[idx].nextElementSibling.classList.contains("full")) {
        idx--;
    }

    // Update the small cups' appearance based on the clicked cup
    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });

    // Update the big cup's appearance
    updateBigCup();
}

// Function to update the appearance of the big cup and remaining and percentage displays
function updateBigCup() {
    const fullGlasses = document.querySelectorAll(".cup-small.full").length;
    const totalGlasses = smallCups.length;

    // Update percentage display and bar
    if (fullGlasses === 0) {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = "visible";
        percentage.style.height = `${(fullGlasses / totalGlasses) * 350}px`;
        percentage.innerText = `${(fullGlasses / totalGlasses) * 100}%`;
    }

    // Update remaining display
    if (fullGlasses === totalGlasses) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    } else {
        remained.style.visibility = "visible";
        // Calculate remaining liters and display it
        remained.innerText = `${(2 - (0.25 * fullGlasses)).toFixed(2)}L`;
    }
}

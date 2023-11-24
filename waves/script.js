const container = document.getElementById("container");
const circlesArr = [];
const rows = 15;
const cols = 15;

// Create the grid of circles
for (let i = 0; i < cols; i++) {
    circlesArr[i] = [];
    for (let j = 0; j < rows; j++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        container.appendChild(circle);
        circlesArr[i].push(circle);
    }
}

// Add click event listeners to each circle
circlesArr.forEach((cols, i) => {
    cols.forEach((circle, j) => {
        circle.addEventListener("click", () => {
            growCircles(i, j);
        });
    });
});

// Recursive function to grow circles
function growCircles(i, j) {
    // Check if the current circle is valid and not already growing
    const currentCircle = circlesArr[i] && circlesArr[i][j];

    if (currentCircle && !currentCircle.classList.contains("grow")) {
        // Mark the current circle as growing
        currentCircle.classList.add("grow");

        // Recursively grow neighboring circles after a delay
        setTimeout(() => {
            growCircles(i - 1, j);
            growCircles(i + 1, j);
            growCircles(i, j - 1);
            growCircles(i, j + 1);
        }, 100);

        // Reset the current circle after a longer delay
        setTimeout(() => {
            currentCircle.classList.remove("grow");
        }, 300);
    }
}

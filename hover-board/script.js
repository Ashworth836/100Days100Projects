const container = document.getElementById("container");
const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6', '#1abc9c'];
const SQUARES_NR = 600;

for (let i = 0; i < SQUARES_NR; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        setColorToElement(square);
    });

    square.addEventListener("mouseout", () => {
        removeColorFromElement(square);
    });

    container.appendChild(square);
}

function setColorToElement(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function removeColorFromElement(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #121212`;
}

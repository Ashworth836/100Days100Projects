const radiusCheckbox = document.querySelectorAll(".radius input");
const colorsElement = document.getElementById("colors");
const container = document.getElementById("container");
const itemsElement = document.getElementById("items");

const colorObj = {
    'oceanic': ["#275D8C", "#66A5AD", "#9BBFAB", "#D8C49A"],
    'sunset': ["#FF6B6B", "#FF8E53", "#FFAA61", "#FFD86B"],
    'royal': ["#4B0082", "#8A2BE2", "#9370DB", "#BA55D3"],
    'golden': ["#332933", "#7D5A44", "#B7885E", "#E6AF2E"],
    'enchanted': ["#394340", "#6A8A82", "#9DB1A3", "#C9D9B9"],
    'mysterious': ["#221E22", "#464B66", "#6B75A1", "#A49E8E"],
}

let colors  = [...colorObj.oceanic];
let items = 15;
let radiusArr = ["100%", "0%", "0%", "0%"]; // [top-left, top-right, bottom-right, bottom-left] corner

radiusCheckbox.forEach((checkbox, idx) => {
    checkbox.addEventListener("change", (evt) => {
        radiusArr[idx] = evt.target.checked ? "100%" : "0%";
        createTiles();
    });
});

itemsElement.addEventListener("change", (evt) => {
    items = +evt.target.value;
    createTiles();
});

colorsElement.addEventListener("change", (evt) => {
    colors = [...colorObj[evt.target.value]];
    createTiles();
});

function createTiles() {
    container.innerHTML = "";

    const {innerWidth: width, innerHeight: height} = window;
    const radius = radiusArr.reduce((acc, el) => acc += `${el} `, "");
    const itemsRow = items;
    const itemsCol = items;
    const rowSize = width / itemsRow;
    const colSize = height / itemsCol;

    for (let i = 0; i < rowSize; i++) {
        const parentElement = document.createElement("div");
        for (let j = 0; j < colSize; j++) {
            const size = Math.floor(Math.max(rowSize, colSize));
            const element = document.createElement("div");
            element.classList.add("element");
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            const randomColorIndex = Math.floor(Math.random() * colors.length);
            element.style.background = colors[randomColorIndex]; 
            element.style.borderRadius = radius;
            element.style.transform = `rotate(${Math.floor(Math.random() * 4) * 90}deg)`;
            parentElement.appendChild(element);
        }
        container.appendChild(parentElement);
    }
}

createTiles();
const body = document.body;
const color = document.getElementById("color");
const button = document.getElementById("button");

button.addEventListener("click", changeBackground);

function changeBackground() {
    const col1 = getRandomRGB();
    const col2 = getRandomRGB();
    const col3 = getRandomRGB();
    const colorString = `rgb(${col1}, ${col2}, ${col3})`;
    body.style.background = colorString;
    color.innerText = colorString;
}

function getRandomRGB() {
    return Math.floor(Math.random() * 256);
}
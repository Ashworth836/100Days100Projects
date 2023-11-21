const memojiElement = document.querySelector(".memoji");
let currentMemoji = 1;
const totalMemoji = 15;

const getMemojiURL = (nr) => `https://www.florin-pop.com/images/memoji-${nr}.png`;

const getRandomNum = () => Math.random() < 0.4 ? "0" : Math.random() > 0.66 ? "1" : " ";

createBgNumbers();
setInterval(changeMemoji, 400);
setInterval(changeNumbers, 100);

function changeNumbers() {
    const nums = document.querySelectorAll(".num");

    nums.forEach(num => {
        num.innerHTML = `<span>${getRandomNum()}</span>`;
        num.style.color = Math.random() < 0.2 ? "#ff4745" : "#2f3542";
    });
}

function createBgNumbers() {
    const size = 30;
    const row = Math.ceil(window.innerWidth / 30);
    const col = Math.ceil(window.innerHeight / 30);

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const num = document.createElement("div");
            num.classList.add("num");
            num.style.top = `${j * size}px`;
            num.style.left = `${i * size}px`;
            num.innerHTML = `<span>${getRandomNum()}</span>`;
            num.style.color = Math.random() < 0.2 ? "#ff4757" : "#2f3542";
            document.body.appendChild(num);
        }
    }
}

function changeMemoji() {
    currentMemoji++;

    if (currentMemoji > totalMemoji) {
        currentMemoji = 1;
    }

    memojiElement.src = getMemojiURL(currentMemoji);
}

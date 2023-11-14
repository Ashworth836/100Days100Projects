const toggle = document.querySelector(".toggle");
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    toggle.innerHTML = document.documentElement.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function setTime() {
    const today = new Date();

    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const hours = today.getHours();
    const hoursForClock = hours % 12;
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    hourElement.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

    timeElement.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    dateElement.innerHTML = `${days[day]}, ${months[month]} ${date} ${year}`;
}

setTime();
setInterval(setTime, 1000);

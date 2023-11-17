const secondsElement  = document.getElementById("seconds");
const minutesElement  = document.getElementById("minutes");
const hoursElement  = document.getElementById("hours");
const daysElement  = document.getElementById("days");

const day = 31;
const month = 11; // December
const today = new Date();

const year = today.getFullYear();
const newYear = new Date(year, month, day);
newYear.setHours(23, 59, 59);

setInterval(updateCountdown, 1000);
setInterval(createSnowFlake, 50);

function updateCountdown() {
    const today = new Date();
    const diff = newYear - today;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours < 10 ? '0'+hours : hours;
    minutesElement.innerHTML = minutes < 10 ? '0'+minutes : minutes;
    secondsElement.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

function createSnowFlake() {
    const snow_flake = document.createElement("i");
    snow_flake.classList.add("fas");
    snow_flake.classList.add("fa-snowflake");
    snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snow_flake.style.left = Math.random() * window.innerWidth + "px";
    snow_flake.style.fontSize = Math.random() * 10 + 10 + "px";
    snow_flake.style.opacity = Math.random();
    
    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove();
    }, 5000);
}
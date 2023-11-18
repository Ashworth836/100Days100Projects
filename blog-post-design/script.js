const dateElement = document.querySelector(".date");
const timeElement = document.querySelector(".time");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function timeUpdate() {
    const today = new Date();

    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const hour = `${hours < 10 ? "0" + hours : hours}`;
    const mins = `${minutes < 10 ? "0" + minutes : minutes}`;
    const secs = `${seconds < 10 ? "0" + seconds : seconds}`;

    timeElement.innerHTML = `${hour}:${mins}:${secs}`;
    
    dateElement.innerHTML = `${days[day]}, ${date < 10 ? "0"+date : date} ${months[month]} ${year}`;
}

timeUpdate();

setInterval(timeUpdate, 1000);

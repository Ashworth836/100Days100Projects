const hours_elements = document.querySelectorAll("#hours .number");
const minutes_elements = document.querySelectorAll("#minutes .number");
const seconds_elements = document.querySelectorAll("#seconds .number");

const states = [
    [1,2,3,4,5,6,8,9,10,11,12,13],
    [3,5,8,10,13],
    [1,2,3,5,6,7,8,9,11,12,13],
    [1,2,3,5,6,7,8,10,11,12,13],
    [1,2,3,4,5,6,7,8,10,13],
    [1,2,3,4,6,7,8,10,11,12,13],
    [1,2,3,4,6,7,8,9,10,11,12,13],
    [1,2,3,5,8,10,13],
    [1,2,3,4,5,6,7,8,9,10,11,12,13],
    [1,2,3,4,5,6,7,8,10,11,12,13],
];

setInterval(getTime, 1000);

function getTime() {
    const time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = (hours < 10 ? `0${hours}` : hours).toString().split("");
    minutes = (minutes < 10 ? `0${minutes}` : minutes).toString().split("");
    seconds = (seconds < 10 ? `0${seconds}` : seconds).toString().split("");

    // set hours
    displayNumber(hours_elements[0], +hours[0]);
    displayNumber(hours_elements[1], +hours[1]);

    // set minutes
    displayNumber(minutes_elements[0], +minutes[0]);
    displayNumber(minutes_elements[1], +minutes[1]);

    // set seconds
    displayNumber(seconds_elements[0], +seconds[0]);
    displayNumber(seconds_elements[1], +seconds[1]);
}

function displayNumber(element, number) {
    const pieces = element.querySelectorAll(".piece");

    pieces.forEach((piece, idx) => {
        if (states[+number].includes(idx + 1)) {
            piece.classList.add("show");
        } else {
            piece.classList.remove("show");
        }
    });
}

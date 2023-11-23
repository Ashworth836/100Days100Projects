const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;
let int;

function blurring() {
    // Increment the loading progress
    load++;

    // Check if the loading is complete (100%)
    if (load > 99) {
        // Clear the interval to stop the blurring process
        clearInterval(int);

        // Reset the loading progress after a delay (2 seconds) and restart the blurring
        setTimeout(() => {
            load = 0;
            int = setInterval(blurring, 30);
        }, 2000);
    }

    // Update the text content to show the current loading percentage
    loadText.innerText = `${load}%`;

    // Calculate and set the opacity of the loading text based on the loading progress
    loadText.style.opacity = scale(load, 100, 1, 0);

    // Calculate and set the blur effect on the background image based on the loading progress
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}


int = setInterval(blurring, 30);

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

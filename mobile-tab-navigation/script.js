const wallpaper = document.getElementById("wallpaper");

const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

const dateElement = document.getElementById("date");
const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");

const months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

wallpaper.addEventListener("click", () => {
    wallpaper.classList.add("hide");
})


listItems.forEach((item, idx) => {
    item.addEventListener("click", () => {
        hideAllContent();
        hideAllItems();

        item.classList.add("active");

        contents[idx].classList.add("show");
    });
});

function hideAllContent() {
    contents.forEach(content => {
        content.classList.remove("show");
    });
}

function hideAllItems() {
    listItems.forEach(item => {
        item.classList.remove("active");
    })
}

function timeDate() {
    const today = new Date();

    const hours = today.getHours();
    const minutes = today.getMinutes();

    const day = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    hourElement.innerHTML = hours < 10 ? "0" + hours : hours;
    minuteElement.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    dateElement.innerHTML = `${days[day]}, ${date} ${months[month]} ${year}`
}
setInterval(timeDate, 1000);

// Call the function to update the time when needed
timeDate();
const open_btn = document.getElementById("open");
const close_btn = document.getElementById("close");
const container = document.getElementById("container");

open_btn.addEventListener("click", () => {
    container.classList.add("show-nav");
});

close_btn.addEventListener("click", () => {
    container.classList.remove("show-nav");
});
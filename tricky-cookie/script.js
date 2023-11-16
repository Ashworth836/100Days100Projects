const trickyBtn = document.getElementById("tricky");
const btnContainer = document.querySelector(".btn-container");
const popupContainer = document.querySelector(".popup");
const closeBtn = document.getElementById("close");

btnContainer.style.flexDirection = "row";

trickyBtn.addEventListener("mouseover", () => {
    const currentContainer = btnContainer.style.flexDirection;
    btnContainer.style.flexDirection = (currentContainer === "row") ? "row-reverse" : "row";
});

setTimeout(() => {
    popupContainer.classList.add("show");
}, 3000);

closeBtn.addEventListener("click", () => {
    popupContainer.classList.remove("show");
});

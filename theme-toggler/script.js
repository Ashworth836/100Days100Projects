const checkbox = document.getElementById("chk");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});
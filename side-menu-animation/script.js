const menu_btn = document.getElementById("menu");
const content = document.getElementById("content");
const sidebar = document.getElementById("sidebar");

menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
});

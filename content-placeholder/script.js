const name = document.getElementById("name");
const date = document.getElementById("date");
const title = document.getElementById("title");
const header = document.getElementById("header");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg");

function getData() {
    header.querySelector("img").style.display = "block";
    title.innerHTML = "Lorem ipsum dolor sit amet.";
    excerpt.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias debitis vero ut eveniet incidunt voluptate, ea minus officia delectus.";
    profile_img.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="header" />`;
    name.innerHTML = "Ashworth Sakara";
    date.innerHTML = "15 September 2023";

    animated_bg.forEach(bg => {bg.classList.remove("animated-bg")});
    animated_bg_text.forEach(bg => {bg.classList.remove("animated-bg-text")});
}

setTimeout(getData, 2500);
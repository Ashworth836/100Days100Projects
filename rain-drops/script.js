function createCircle() {
    const createElement = document.createElement("div");
    createElement.classList.add("circle");
    createElement.style.top = Math.random() * innerHeight + "px";
    createElement.style.left = Math.random() * innerWidth + "px";
    document.body.appendChild(createElement);

    setTimeout(() =>{
        createElement.remove();
    }, 3000);
}

setInterval(createCircle, 300);
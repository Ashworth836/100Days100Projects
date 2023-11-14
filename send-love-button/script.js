const love_btns = document.querySelectorAll(".love");

love_btns.forEach(love_btn => {
    love_btn.addEventListener("mousedown", () => {
        love_btn.style.color = "#e7273f";
        love_btn.style.background= "#fefefe";
        love_btn.querySelector(".text").innerHTML = `<span class="grey-text">Sent to: </span> Ash`;

        createHearts(love_btn.querySelector(".icon-container"));
    });

    love_btn.addEventListener("mouseup", () => {
        love_btn.style.color = "#fefefe";
        love_btn.style.background = "#e7273f";
        love_btn.querySelector(".text").innerHTML = 'THANK YOU! <i class="fas fa-redo"></i>';
    });

});

function createHearts(container){
    for(let i = 0; i < 15; i++){
        setTimeout(() => {
            const heart = document.createElement("span");
            heart.classList.add("heart");
            heart.innerHTML = '<i class="fas fa-heart"></i>';
            heart.style.top = Math.random() * 100 + "%";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.fontSize = Math.random() * 20 + 5 + "px";
            heart.style.animationDirection = Math.random() * 2 + 3 + "s";
            container.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 3000);

        }, i * 100);
    }
}
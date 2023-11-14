const panel = document.querySelector("#panel");
const sendBtn = document.querySelector("#send");
const ratings = document.querySelectorAll(".rating");
const emojis = document.querySelectorAll(".fa-regular");

ratings.forEach(rate => {
    rate.addEventListener("click", () => {
        ratings.forEach(innerElement => {
            innerElement.classList.remove("active");
        });
        rate.classList.add("active");

        emojis.forEach(emoji => {
            emoji.classList.remove("fa-fade");
        });

        if (rate.classList.contains("active")) {
            const emoji = rate.querySelector(".fa-regular");
            if (emoji) {
                emoji.classList.add("fa-fade");
            }
        }
    });
});

sendBtn.addEventListener("click", () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you, Ash!</strong>
        <p>We'll use your feedback to improve our customer support performance.</p>
        <input type="button" value="Done" class="btn" onclick="location.href='index.html'">
    `;
});

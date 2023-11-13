const form = document.getElementById("contact_form");
const container = document.querySelector(".container");
form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newInnerHtml = `
        <p>Thanks for your message. <br /> I\'ll get back to you soon. 😃</p>
    `;
    container.innerHTML = newInnerHtml;
});

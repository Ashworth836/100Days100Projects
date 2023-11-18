const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (evt) => {
    // Event listener for the "input" event on the "password" input element.

    const input = evt.target.value;
    // Get the value (the text) entered into the password input field.

    const length = input.length;
    // Get the length (number of characters) of the entered text.

    const blur_value = 20 - length * 2;
    // Calculate the blur value based on the length of the entered text.
    // The longer the text, the less blur is applied.

    background.style.filter = `blur(${blur_value}px)`;
    // Apply the calculated blur value to the background element's "filter" CSS property.
});

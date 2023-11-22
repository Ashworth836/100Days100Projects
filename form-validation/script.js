const form = document.getElementById("form");
const email = document.getElementById("floatingEmail");
const username = document.getElementById("floatingUsername");
const password = document.getElementById("floatingPassword");
const confirmPassword = document.getElementById("floatingConfirmPassword");

form.addEventListener("submit", evt => {
    evt.preventDefault();

    checkInputs();
});

function checkInputs() {

    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === "") {
        setErrorFor(username, "Username cannot be blank");
    } else {
        setSuccessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Not a valid email")
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "Password cannot be blank");
    } else {
        setSuccessFor(password);
    }

    if (confirmPasswordValue === "") {
        setErrorFor(confirmPassword, "Password cannot be blank");
    } else if (passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "Password does not match")
    } else {
        setSuccessFor(confirmPassword);
    }

}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-floating error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-floating success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
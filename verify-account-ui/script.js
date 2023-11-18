const codes = document.querySelectorAll(".code");

// Initially focus first input 
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("keydown", (evt) => {
        if (evt.key >= 0 && evt.key <= 9) {
            if (code.value.length === 1) {
                evt.preventDefault();
            } else {
                setTimeout(() => {
                    codes[idx + 1].focus();
                }, 10);
            }
        } else if (evt.key === "Backspace") {
            if (code.value.length === 0 && idx > 0) {
                evt.preventDefault(); // Prevent the browser's default Backspace behavior
                setTimeout(() => {
                    codes[idx - 1].focus();
                }, 10);
            }
        } else {
            evt.preventDefault(); // Prevent input of non-numeric characters
        }
    });
});

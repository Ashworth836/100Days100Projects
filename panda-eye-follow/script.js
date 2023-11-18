const eyes = document.querySelectorAll(".eye-roll");

const handleMouseOver = (evt) => {
    eyes.forEach(eye => {
        const eyeRect = eye.getBoundingClientRect();
        const x = eyeRect.left + eyeRect.width / 2;
        const y = eyeRect.top + eyeRect.height / 2;
        const radian = Math.atan2(evt.clientX - x, evt.clientY - y);
        const degrees = (radian * (180 / Math.PI) * -1) + 90;
        eye.style.transform = `rotate(${degrees}deg)`;

        console.log(degrees);
    });
};

window.addEventListener("mousemove", handleMouseOver);

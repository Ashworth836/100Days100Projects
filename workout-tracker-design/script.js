const power = document.getElementById("power");
const workout = document.querySelector(".workout-info");

workout.classList.add("off");

power.addEventListener("click", () => {
    if(workout.classList.contains("off")){
        workout.classList.remove("off");
        workout.classList.add("on");
    } else {
        workout.classList.remove("on");
        workout.classList.add("off");
    }
});

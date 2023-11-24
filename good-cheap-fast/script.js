const toggles = document.querySelectorAll(".toggle");
const cheap = document.getElementById("cheap");
const good = document.getElementById("good");
const fast = document.getElementById("fast");

toggles.forEach(toggle => {
    toggle.addEventListener("change", evt => {
        doTheTrick(evt.target);
    });
});

function doTheTrick(clickedEvt) {
    if(good.checked && cheap.checked && fast.checked) {
        if(good === clickedEvt) {
            fast.checked = false;
        }

        if (cheap === clickedEvt) {
            good.checked = false;
        }

        if(fast === clickedEvt){
            cheap.checked = false;
        }
    }
}
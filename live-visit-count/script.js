const count = document.getElementById("count");

updateVisitCount();

function updateVisitCount() {
    fetch("website")
    .then(res => res.json())
    .then(res => {
        count.innerHTML = res.value;
    });
}
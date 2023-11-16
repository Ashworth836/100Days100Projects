const progressDone = document.querySelectorAll(".progress-bar");

progressDone.forEach(progress => {
    progress.style.width = progress.getAttribute("data-done") + "%";
});

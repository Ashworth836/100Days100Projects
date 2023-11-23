const breadcrumbs = document.querySelectorAll(".breadcrumbs li");

breadcrumbs.forEach((element, index) => {
    element.addEventListener("click", () => {
        // Remove "active" class from all subsequent breadcrumbs
        for (let i = index + 1; i < breadcrumbs.length; i++) {
            breadcrumbs[i].classList.remove("active");
        }

        // Toggle the "active" class for the clicked breadcrumb
        element.classList.toggle("active");
    });
});

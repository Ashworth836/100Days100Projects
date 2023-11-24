const faqItems = document.querySelectorAll(".faq");

faqItems.forEach(faqItem => {
    const toggle = faqItem.querySelector(".faq-toggle");

    toggle.addEventListener("click", () => {
        // Close all FAQ items
        faqItems.forEach(item => {
            if (item !== faqItem && item.classList.contains("active")) {
                item.classList.remove("active");
            }
        });

        // Toggle the active class on the clicked FAQ item
        faqItem.classList.toggle("active");
    });
});

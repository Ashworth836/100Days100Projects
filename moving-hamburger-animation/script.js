const toMove = document.getElementById("to-move");
const clickableMenus = document.querySelectorAll(".clickable");

// Attach click event listener to each clickable menu
clickableMenus.forEach(menu => {
    menu.addEventListener("click", () => {
        // Activate the clicked menu
        activateMenu(menu);
    });
});

// Function to activate a menu
function activateMenu(menu) {
    // Get the value of the "data-class" attribute
    const dataClass = menu.getAttribute("data-class");
    
    // Set the className of "toMove" to include "menu", "active", and the specific data-class
    toMove.className = `menu active ${dataClass}`;
}

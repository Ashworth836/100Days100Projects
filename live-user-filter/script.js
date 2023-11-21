// Get references to HTML elements
const filter = document.getElementById("filter");
const result = document.getElementById("result");
let listItems = []; // Array to store list items

// Add event listener to the filter input
filter.addEventListener("input", evt => {
    filterData(evt.target.value);
});

// Function to filter data based on the search term
function filterData(searchTerm) {
    listItems.forEach(item => {
        // Get the concatenated text content of name and location
        const userText = item.querySelector('.user-info h4').innerText + item.querySelector('.user-info p').innerText;

        // Check if the userText includes the search term
        if (userText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
}

// Function to fetch and display user data
function getData() {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => {
            result.innerHTML = ""; // Clear previous results

            data.results.forEach(user => {
                // Create a new list item
                const li = document.createElement("li");
                listItems.push(li); // Add the list item to the array

                // Populate the list item with user data
                li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

                // Append the list item to the result container
                result.appendChild(li);
            });
        });
}

// Call getData() to populate the initial list when the page loads
getData();
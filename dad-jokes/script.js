// Get references to HTML elements
const jokeElement = document.getElementById("joke");
const getJokeButton = document.getElementById("get_joke");

// Attach click event listener to the button
getJokeButton.addEventListener("click", generateJoke);

// Initial joke generation on page load
generateJoke();

// Function to generate a joke asynchronously
async function generateJoke() {
    try {
        // Fetch a joke from the API
        const jokeResponse = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        });

        // Parse the response as JSON
        const jokeData = await jokeResponse.json();

        // Update the HTML element with the retrieved joke
        updateJokeElement(jokeData.joke);
    } catch (error) {
        // Log any errors that may occur during the fetching process
        console.error("Error fetching joke:", error);
    }
}

// Function to update the HTML element with a new joke
function updateJokeElement(joke) {
    jokeElement.innerHTML = joke;
}

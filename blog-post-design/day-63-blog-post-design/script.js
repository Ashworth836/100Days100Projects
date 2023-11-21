const container = document.getElementById("container");

// Call getPost three times to fetch and display three posts
getPost();
getPost();
getPost();

// Function to fetch post and user data, then add it to the DOM
async function getPost() {
    try {
        // Fetch post data from JSONPlaceholder API
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`);
        const postData = await postResponse.json();

        // Fetch user data from RandomUser API
        const userResponse = await fetch('https://randomuser.me/api');
        const userData = await userResponse.json();

        // Combine post and user data
        const data = { post: postData, user: userData.results[0] };

        // Log user data (for testing)
        console.log(userData);

        // Add data to the DOM
        addDataToDOM(data);

    } catch (error) {
        // Log any errors that occur during the fetching process
        console.log(error);
    }
}

// Function to generate a random number between 1 and 100
function getRandomNr() {
    return Math.floor(Math.random() * 100) + 1;
}

// Function to add post and user data to the DOM
function addDataToDOM(data) {
    // Create a div element for the blog post
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    // Populate the div with post and user data
    postElement.innerHTML = `
        <h2 class="title">${data.post.title}</h2>
        <p class="text">${data.post.body}</p>
        <div class="user-info">
            <img src="${data.user.picture.large}" alt="${data.user.name.first}" />
            <span>${data.user.name.first} ${data.user.name.last}</span>
        </div>
    `;

    // Append the post element to the container
    container.appendChild(postElement);
}

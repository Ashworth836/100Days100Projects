// Get references to the loading and container elements
const loading = document.querySelector(".loading");
const container = document.getElementById("container");

// Arrays for months, titles, and contents
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const titleContentPairs = [
    {
      title: "Exploring the Enchanting Forests of the Pacific Northwest",
      content: "Discover the lush greenery and wildlife that thrive in the heart of the Pacific Northwest's forests.",
    },
    {
      title: "Mastering the Art of Homemade Pasta: A Step-by-Step Guide",
      content: "Learn how to make pasta from scratch with our detailed guide, including secret family recipes!",
    },
    {
      title: "Unlocking Your Creativity: Tips for Overcoming Writer's Block",
      content: "Struggling with writer's block? We've got the strategies you need to reignite your creativity.",
    },
    {
      title: "The Wonders of Space Exploration: A Journey Beyond the Stars",
      content: "Embark on a cosmic adventure as we delve into the latest breakthroughs in space exploration.",
    },
    {
      title: "Mindful Living: Finding Inner Peace Amidst the Chaos",
      content: "In a fast-paced world, find serenity through mindfulness practices that promote mental well-being.",
    },
    {
      title: "Tech Innovations That Will Shape the Future of Healthcare",
      content: "Explore the cutting-edge technologies that are revolutionizing the healthcare industry.",
    },
    {
      title: "A Culinary Adventure in Tuscany: Exploring Italy's Food Culture",
      content: "Savor the flavors of Tuscany and immerse yourself in the rich culinary traditions of Italy.",
    },
    {
      title: "Becoming a Productivity Guru: Time Management Tips for Success",
      content: "Boost your productivity and achieve your goals with these expert time management strategies.",
    },
    {
      title: "The Beauty of Nature: A Photography Journey Through National Parks",
      content: "Capture the breathtaking landscapes and diverse wildlife of America's national parks through the lens of a camera.",
    },
    {
      title: "Healthy Habits for a Happy Life: Wellness Tips for Everyday Living",
      content: "Discover simple yet effective habits to improve your physical and mental well-being.",
    },
    {
      title: "Green Technology Revolution: Sustainable Solutions for a Better World",
      content: "Learn about the latest innovations in green technology that are reshaping industries and preserving our planet.",
    },
];

// Scroll Event Listener
window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    console.log("scroll", scrollTop + clientHeight, scrollHeight - 50);

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});

// Function to display loading animation
function showLoading() {
    loading.classList.add("show");

    setTimeout(() => {
        loading.classList.remove("show");

        setTimeout(() => {
            createPost();
        }, 300);

    }, 1000);
}

// Generate initial posts
createPost();
createPost();
createPost();

// Function to create a new post
function createPost() {
    const post = document.createElement("div");
    post.classList.add("post");

    const { title, content } = randomFrom(titleContentPairs); // Get random title and content

    post.innerHTML = `
        <div class="post-info">
            <h2 class="post-title">${title}</h2>
            <small class="post-date">${randomDate()}</small>
            <p class="post-excerpt">${content}</p>
        </div>
    `;

    container.appendChild(post);
}

// Function to select a random item from an array
function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate a random date
function randomDate() {
    const year = 2023; // You can specify the desired year
    const month = Math.floor(Math.random() * 12); // Random month index between 0 and 11
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the selected month
    const day = Math.floor(Math.random() * daysInMonth) + 1; // Random day between 1 and the last day of the selected month
    return `${months[month]} ${day}, ${year}`;
}

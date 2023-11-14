const container = document.querySelector(".testimonial_container");
const authorsElement = document.querySelectorAll(".author");
const textElement = document.querySelector(".text");
const nameElement = document.querySelector(".name");

const testimonials = [
	{
		text: 'I had my concerns that due to a tight deadline this project can\'t be done. But Ash proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I\'m looking forward to work with him again and I totally recommend him. Thanks again Ash!',
		color: 'rgba(235, 59, 90, 1.0)'
	},{
		text: 'Second time hiring him. Finished everything in a timely manner and his work is excellent. Can\'t recommend him enough.',
		color: 'rgba(250, 130, 49, 1.0)'
	},{
		text: 'Ash never fails to impress me by the quality of his work and delivering on time. When it comes to front-end, he is definitely my go to guy. Always is a pleasure to work with Ash even when deadlines are tight and pressure is great. It\'s reassuring to have a project in such good hands.',
		color: 'rgba(75, 123, 236, 1.0)'
	},{
		text: 'Ash has been of great help on our different web projects. He is very trustworthy and serious in the work done. Keep on the good work and energy, been a pleasure to collaborate.',
		color: 'rgba(165, 94, 234, 1.0)'
	},{
		text: 'I hired Ash Pop based on others positive experiences, and I understand why he\'s so highly rated. His code is very clean, he communicates well, and he likes to offer alternative solutions.',
		color: 'rgba(32, 191, 107, 1.0)'
	},{
		text: 'Second time hiring him. Finished everything in a timely manner and his work is excellent. Can\'t recommend him enough.',
		color: 'rgba(250, 130, 120, 1.0)'
	}
];

let selectedIdx = 0;

addTestimonial(selectedIdx);

authorsElement.forEach((author, idx) => {
    author.addEventListener("click", () => {
        if (idx !== selectedIdx) {
            selectedIdx = idx;
            addTestimonial(idx);
        }
        author.classList.add("selected");
    });
});

async function addTestimonial(idx) {
    const testimonial = testimonials[idx];
    const url = 'https://randomuser.me/api/?results=6';

    try {
        const response = await fetch(url);
        const data = await response.json();
        const randomUsers = data.results;

        randomUsers.forEach((user, idx) => {
            const fullName = `${user.name.first} ${user.name.last}`;
            nameElement.innerHTML = fullName;

            const imageURL = user.picture.large;
            const authorImg = authorsElement[idx].querySelector('img');
            authorImg.src = imageURL;
            authorImg.alt = fullName;
        });

        textElement.innerHTML = testimonial.text;
        container.style.background = testimonial.color;
        container.style.boxShadow = `0 35px 10px -20px ${testimonial.color.substring(0, testimonial.color.length - 4)}0.9)`;

        authorsElement.forEach((author, i) => {
            if (i !== idx) {
                author.classList.remove("selected");
            }
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

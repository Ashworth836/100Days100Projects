const text = document.getElementById("text");
const programmingAffirmations = [
    "We Love Programming!",
    "Coding is our passion!",
    "Debugging is an adventure!",
    "Algorithms are our friends!",
    "Syntax errors make us stronger!",
    "We speak fluent JavaScript!",
    "Coders gonna code!",
    "Embracing the bugs!",
    "Turning coffee into code!",
    "Committing to excellence!",
    "console.log('Hello, World!');",
    "Code, coffee, repeat!",
    "Programming is an art!",
    "Code is poetry!",
    "We dream in code!",
    "Ctrl + Alt + Del is our mantra!",
    "Code like there's no tomorrow!",
    "In code we trust!",
    "Keep calm and code on!",
    "May your code compile without errors!",
];
let currentAffirmationIndex = 0; // Track the current affirmation
let charIndex = 0; // Track the current character being typed

writeText(); // Call it initially to display the first affirmation

setInterval(changeAffirmation, 60000); // Change every 60 seconds

function changeAffirmation() {
    // Increment the currentAffirmationIndex to get the next affirmation in the array
    currentAffirmationIndex = (currentAffirmationIndex + 1) % programmingAffirmations.length;
    
    // Reset the charIndex to start typing the new affirmation from the beginning
    charIndex = 0;

    // Call the writeText function to start typing the new affirmation
    writeText();
}


function writeText() {
    // Get the current affirmation from the array based on currentAffirmationIndex
    const affirmation = programmingAffirmations[currentAffirmationIndex];

    // Set the text content of the HTML element to the portion of the affirmation being typed
    text.innerText = affirmation.slice(0, charIndex + 1);

    // Increment charIndex to move to the next character
    charIndex++;

    // Check if there are more characters to type in the affirmation
    if (charIndex < affirmation.length) {
        // If there are more characters, set a timeout to call writeText after a delay of 100 milliseconds
        setTimeout(writeText, 150);
    } else {
        // If all characters have been typed, set a timeout to call changeAffirmation after a delay of 2000 milliseconds (2 seconds)
        setTimeout(changeAffirmation, 2000);
    }
}

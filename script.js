// Array of fun facts - customize these with your own facts!
const facts = [
    "The first computer bug was an actual real-life bug. In 1947, Grace Hopper found a moth causing issues in the Harvard Mark II computer, and it was taped to the computer's logbook.",
    "The programming language Python was named after 'Monty Python's Flying Circus', not the snake. Creator Guido van Rossum was a big fan of the comedy series.",
    "The first programmer in history was a woman. Ada Lovelace wrote the first algorithm intended to be processed by a machine in the 1840s.",
    "The most expensive programming language to develop was ADA, costing over $1 billion to develop in the 1970s.",
    "The first computer game was created in 1961. It was called 'Spacewar!' and was developed at MIT on a PDP-1 computer.",
    "The term 'debugging' was coined by Thomas Edison in the 1870s while working on the quadruplex telegraph.",
    "JavaScript was created in just 10 days by Brendan Eich in 1995, and was originally called 'Mocha' before being renamed.",
    "The first website ever created is still online! You can visit it at info.cern.ch.",
    "The QWERTY keyboard layout was designed to prevent typewriter keys from jamming, not to optimize typing speed.",
    "The movie 'The Matrix' used actual green code in its visuals, which was scanned from Japanese sushi recipes.",
];

// Get DOM elements
const factDisplay = document.getElementById('fact-display');
const factButton = document.getElementById('fact-button');

// Function to generate random fact
function generateRandomFact() {
    // Get random index
    const randomIndex = Math.floor(Math.random() * facts.length);
    
    // Update the display with new fact
    factDisplay.textContent = facts[randomIndex];
}

// Add click event listener to button
factButton.addEventListener('click', generateRandomFact);

// Generate a random fact when page loads
generateRandomFact();

// Array of fun facts
const facts = [
    "The first computer bug was an actual real bug - a moth found in Harvard's Mark II computer in 1947!",
    "The programming language Python was named after Monty Python, not the snake!",
    "The first programmer in history was Ada Lovelace, a woman who lived in the 1800s!",
    "JavaScript was created in just 10 days by Brendan Eich in 1995!",
    "The first computer mouse was made of wood!",
    "The QWERTY keyboard layout was designed to slow down typing to prevent typewriter jams!",
    "The first website ever is still online! It was published on August 6, 1991!",
    "Approximately 70% of all coding jobs are in non-technology sectors!",
    "The first computer game was created in 1961 - it was called Spacewar!",
    "The most common programming language for NASA is still C from the 1970s!"
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

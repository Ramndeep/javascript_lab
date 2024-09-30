// Variable declerations
let celestialName = "Mars"; // Name of the celestial body
const celestialType = "Planet";   // Type of celestial body
var discoveryYear = 1659;       // Year of discovery

// Log variable values for debugging
console.log("Celestial Name:", celestialName);
console.log("Celestial Type:", celestialType);
console.log("Discovery Year:", discoveryYear);

// Function to populate the header with the celestial body's name
function populateHeader() {
   let header = document.getElementById("celestial-name");
   header.innerText = celestialName; // Set the celestial name
   console.log("Header populated with:", celestialName); // Log after populating header
}
// Call the function on page load
window.onload = populateHeader;

//Implementing Event Listeners
const spaceFactButton = document.getElementById('reveal-fact');
const spaceFactDiv = document.getElementById('space-fact');

const spaceFact = "Mars is home to the largest volcano in the solar system, Olympus Mons.";

spaceFactButton.addEventListener('click', () => {
    spaceFactDiv.textContent = spaceFact; // Show the fact
    spaceFactDiv.style.display = 'block'; // Make the fact visible
});

// Manipulating the DOM
let newElement = document.createElement("p");  //created new element
newElement.innerText = "Mars is known as the Red Planet due to its reddish appearance.";
document.getElementById("celestial-info").append(newElement);  // append to the calestial-info section.

// Arrow function to convert light-years to miles
const lightYearsToMiles = (lightYears) => lightYears * 5.878625e12; // 1 light year in miles
console.log("Distance to Proxima Centauri in miles:", lightYearsToMiles(4.24)); // Log the conversion result

// Using the function
const miles = lightYearsToMiles(4.24); // Example: Convert 4.24 light-years
console.log(miles); // result

//Error Handling with Try-Catch-Finally
try {
   nonExistentFunction();  //calling a function that may not exist
} catch (error) {
   console.error('An error occurred:', error);
} finally {
   console.log('Error handling complete.');
}

// looping through data
// Array of interesting facts about Mars
const interestingFacts = [
   "Mars has two moons, Phobos and Deimos.",
   "A day on Mars is approximately 24.6 hours.",
   "Mars is the fourth planet from the Sun."
];

// Create an unordered list element
const ul = document.createElement('ul');

// Loop through the array and create list items
interestingFacts.forEach(fact => {
   const li = document.createElement('li'); // Create a new <li> element
   li.textContent = fact; // Set the text content of the <li>
   ul.appendChild(li); // Append the <li> to the <ul>
});

// Append the <ul> to the celestial-info section
const celestialInfoSection = document.getElementById('celestial-info');
celestialInfoSection.appendChild(ul);


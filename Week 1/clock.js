const blessed = require('blessed');

// Create a screen object
const screen = blessed.screen({
    smartCSR: true // Enable smart cursor positioning
});

// Calculate dimensions and positioning for the clock box
const screenWidth = Math.floor(screen.width / 2); // Half of the screen width
const screenHeight = Math.floor(screen.height / 2); // Half of the screen height
const clockWidth = Math.min(screenWidth, 40); // Limit clock width to maximum of 40 characters
const clockHeight = 5; // Fixed height for the clock box
const clockLeft = Math.floor((screenWidth - clockWidth) / 2); // Center horizontally
const clockTop = Math.floor((screenHeight - clockHeight) / 2); // Center vertically

// Create a box element for the clock display
const clockBox = blessed.box({
    top: clockTop,
    left: clockLeft,
    width: clockWidth,
    height: clockHeight,
    align: 'center',
    valign: 'middle',
    content: '{bold}Loading...{/bold}',
    tags: true,
    style: {
        fg: 'white', // Set text color to white
        bg: 'blue', // Set background color to blue
        border: {
            fg: 'white' // Set border color to white
        }
    }
});

// Add the box element to the screen
screen.append(clockBox);

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `{bold}${hours}:${minutes}:${seconds}{/}`;
    clockBox.setContent(timeString);
    screen.render();
}

// Update the clock every second
setInterval(updateClock, 1000);

// Quit the application when the Escape key is pressed
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});

// Render the screen
screen.render();
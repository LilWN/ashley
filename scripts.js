let music = document.getElementById("music");
music.volume = 0.15;

// Get the text element
var fade1El = document.getElementById('fade1');
var fade2El = document.getElementById('fade2');
var fade3El = document.getElementById('fade3');
var fade4El = document.getElementById('fade4');

// Function to handle the play event
function handlePlay() {
    sleep(8000);
    // Add the fade-in class to the text element
    fade1El.classList.add('fade-in');
    fade2El.classList.add('fade-in');
    fade3El.classList.add('fade-in');
    fade4El.classList.add('fade-in');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

// Add an event listener for the play event
music.addEventListener('play', handlePlay);
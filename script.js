//assign variables for the time display and interactive buttons 
const time = document.querySelector("#time");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const resetBtn = document.querySelector("#reset");

let interval;
// initialize the seconds, minutes and hour variables
let seconds = 0;
let minutes = 0;
let hours = 0;

// st the timer functionality
function startTimer() {

    // function to run at interval
  interval = setInterval(() => {
    // increment the seconds
    seconds++;
    // increment minutes each time seconds reach 60
    if (seconds === 60) {
      minutes++;
      //reset seconds to 0
      seconds = 0;
    }
    // increment hours each time minutes reach 60

    if (minutes === 60) {
      hours++;
    // reset minutes to 0 each time
      minutes = 0;
    }
    // add the content to the #time container
    // each time the functions runs at interval
    time.textContent = `
    ${hours.toString().padStart(2, "0")}:`+
    `${minutes.toString().padStart(2, "0")}:`+
    `${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

// Clear Interval function
function pauseTimer() {
  clearInterval(interval);
}

// Reset the timer
function resetTimer() {
    // Pause the timer
  pauseTimer();
  // reset time values back to 0
  seconds = 0;
  minutes = 0;
  hours = 0;
  // reset the text inside the "time" div
  time.textContent = "00:00:00";
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

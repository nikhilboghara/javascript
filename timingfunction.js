//

console.log("== timing functions ");

const timerScreen = document.getElementById("time-screen");

const timerBtn = document.getElementById("start-timer");
const holdTimerBtn = document.getElementById("hold-timer");

let intervalId = null;
let timeoutId = null;

let counter = 0;

timerBtn.onclick = function () {
  intervalId = setInterval(() => {
    counter = counter + 1;

    timerScreen.innerHTML = counter;
  }, 1000);
};

holdTimerBtn.onclick = function () {
  timeoutId = setTimeout(() => {
    console.log("Records are deleted successfully ...");
  }, 5000);
};

const killTimerBtn = document.getElementById("kill-timer");
const killTimeOutBtn = document.getElementById("kill-hold-timer");

killTimerBtn.onclick = function () {
  clearInterval(intervalId);
};

killTimeOutBtn.onclick = function () {
  clearTimeout(timeoutId);
};

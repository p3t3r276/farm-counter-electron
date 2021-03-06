"use strict";

let counter = 0;
let counterRunning = false;
let myTimerInterval;

$(document).ready(function () {
  showTimer(counter);

  $("#btnStartTimer").on("click", function (e) {
    if (!counterRunning) {
      counterRunning = true;
      startTimer();
      return;
    }

    stopTimer();
  });

  $("#btnReset").on("click", function (e) {
    resetTimer();
  });
});

function startTimer() {
  myTimerInterval = setInterval(() => {
    counter++;
    showTimer(counter);
  }, 1000);
}

function stopTimer() {
  counterRunning = false;
  if (myTimerInterval) {
    clearInterval(myTimerInterval);
  }
}

function resetTimer() {
  stopTimer();
  counter = 0;
  showTimer(counter);
}

function showTimer(timerAsSecond) {
  let hour = Math.floor(timerAsSecond / 3600);
  if (hour > 0) {
    timerAsSecond = timerAsSecond - hour * 3600;
  }
  let minute = Math.floor(timerAsSecond / 60);
  if (minute > 0) {
    timerAsSecond = timerAsSecond - minute * 60;
  }
  let second = Math.floor(timerAsSecond % 60);

  document.querySelector("#timer").textContent = `${
    hour > 9 ? hour : "0" + hour
  }:${minute > 9 ? minute : "0" + minute}:${
    second > 9 ? second : "0" + second
  }`;
}

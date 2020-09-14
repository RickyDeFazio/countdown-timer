const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const target = '31 Dec 2020';

function countdown() {
  const then = new Date(target)
  const now = new Date();
  let totalSeconds = (then - now) / 1000;

  const daysRemaining = Math.floor(totalSeconds / 3600 / 24);
  const hoursRemaining = Math.floor(totalSeconds / 3600) % 24;
  const minutesRemaining = Math.floor(totalSeconds / 60) % 60;
  const secondsRemaining = Math.floor(totalSeconds) % 60;

  days.textContent = formatTime(daysRemaining);
  hours.textContent = formatTime(hoursRemaining);
  minutes.textContent = formatTime(minutesRemaining);
  seconds.textContent = formatTime(secondsRemaining);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

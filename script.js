const daysEL = document.querySelector("#days");
const hoursEL = document.querySelector("#hours");
const minEL = document.querySelector("#mins");
const secEL = document.querySelector("#secs");

const newYears = "11 Jan 2025";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSec = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const mins = Math.floor(totalSec / 60) % 60;
    const seconds = Math.floor(totalSec) % 60;

    daysEL.innerHTML = formatTime(days);
    hoursEL.innerHTML = formatTime(hours);
    minEL.innerHTML = formatTime(mins);
    secEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
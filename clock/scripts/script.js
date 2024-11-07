const hours = new Date().getHours();
const minutes = new Date().getMinutes();
const seconds = new Date().getSeconds();

document.querySelector('#hours').textContent = hours;
document.querySelector('#minutes').textContent = minutes;
document.querySelector('#seconds').textContent = seconds;

const startHourDeg = ((hours % 12) / 12) * 360;
const startSecondsDeg = (seconds / 60) * 360;
const startMinuteDeg = (minutes / 60) * 360;

document.body.style.setProperty('--start-hour-deg', `${startHourDeg}deg`);
document.body.style.setProperty('--start-minute-deg', `${startMinuteDeg}deg`);
document.body.style.setProperty('--start-second-deg', `${startSecondsDeg}deg`);

setInterval(() => {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    document.querySelector('#hours').textContent = hours < 10 ? `0${hours}`: hours;
    document.querySelector('#minutes').textContent = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector('#seconds').textContent = seconds < 10 ? `0${seconds}`: seconds;
}, 1000)

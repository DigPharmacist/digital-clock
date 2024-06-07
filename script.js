function updateDate() {
    let currentDate = new Date();

    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let day = daysOfWeek[currentDate.getDay()];
    let date = currentDate.getDate();
    let month = monthsOfYear[currentDate.getMonth()];
    let year = currentDate.getFullYear();
    
    document.getElementById("day").textContent = day;
    document.getElementById("date").textContent = date;
    document.getElementById("month").textContent = month;
    document.getElementById("year").textContent = year;
}

updateDate();

    



function updateDateTime() {
let Newtime = new Date()
let hours = Newtime.getHours();
let minutes = Newtime.getMinutes();
let seconds = Newtime.getSeconds();

hours = (hours < 10 ? "0" : "") + hours;
minutes = (minutes < 10 ? "0" : "") + minutes;
seconds = (seconds < 10 ? "0" : "") + seconds;

document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
 
}
    updateDateTime();
    setInterval(updateDateTime, 1000);


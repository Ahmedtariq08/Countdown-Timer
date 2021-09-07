const inputDate = document.getElementById('date');
const dayL = document.querySelector("#days");
const hourL = document.querySelector("#hours");
const minuteL = document.querySelector("#minutes");
const secondL = document.querySelector("#seconds");

let ndate;
let idate;
let newyears = "1 Jan 2022";
inputDate.addEventListener('change', function (e) {
    const datVal = this.value;
    const date = new SliceDate(datVal);
    let idate = new Date(date.year, date.month, date.day)
    console.log(ndate);
    countdown();
    setInterval(countdown, 1000);

})

function countdown() {
    let today = new Date();
    if (idate instanceof Date) {
        ndate = idate;
    }
    else {
        ndate = new Date(newyears);
    }
    const totalSeconds = (ndate - today) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    dayL.innerHTML = days;
    hourL.innerHTML = hours;
    minuteL.innerHTML = minutes;
    secondL.innerHTML = seconds;

}
function SliceDate(el) {
    this.year = el.slice(0, 4);
    this.month = (el.slice(5, 7)) - 1;
    this.day = el.slice(8, 10)
}
countdown();
setInterval(countdown, 1000);


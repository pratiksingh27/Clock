let hr = document.getElementById('hr');
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

    // digital clock javascript
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second");

    let ampm = document.getElementById("ampm");



    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getUTCSeconds();

    let am = h >= 12 ? "PM" : "AM";

    //convert into 12hr clock 
    if(h > 12){
        h=h-12;
    }

    //zero before digit
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am;
})
setInterval (() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    srotate = 6 * sec;
    mrotate = 6 * min;
    hrotate = 30 * hr + min / 2;

    second.style.transform = `rotate(${srotate}deg)`;
    hour.style.transform = `rotate(${hrotate}deg)`;
    minute.style.transform = `rotate(${mrotate}deg)`;
    
    
},1000)

setInterval (() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let mil = date.getMilliseconds();
    let today = date.getDay();
    let todayDate = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    document.querySelector("#day").innerHTML = day[today];
    document.querySelector("#date").innerHTML = todayDate;
    document.querySelector("#month").innerHTML = month;
    document.querySelector("#year").innerHTML = year;
    document.querySelector("#dhour").innerHTML = hr;
    document.querySelector("#dminute").innerHTML = min;
    document.querySelector("#dsecond").innerHTML = sec;
    // document.querySelector("#milli").innerHTML = mil;
}, 1000)
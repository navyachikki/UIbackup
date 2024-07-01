
console.log("am from worker file");

var getCustomDate = () => {
    var cdate = new Date();
    var customDate = `${cdate.getDate()} / ${cdate.getMonth() + 1} / ${cdate.getFullYear()}   ${cdate.getHours()} : ${cdate.getMinutes()} : ${cdate.getSeconds()}`;
    //console.log(customDate);

    // document.querySelector(".dateContainer").innerText = customDate;

    postMessage(customDate)
}

setInterval(() => {
    getCustomDate();
}, 1000)

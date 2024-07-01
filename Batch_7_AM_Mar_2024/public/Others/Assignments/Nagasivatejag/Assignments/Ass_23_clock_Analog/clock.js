var seconds = 0;
var minutes = 0;
var hours = 0;
var time = new Date();

setInterval( function() {
    time = new Date();

    hours =  time.getHours() * 30;
    minutes = time.getMinutes() * 6;
    seconds = time.getSeconds() * 6;

    document.querySelector(".hoursHand").style.transform = "rotate(" + hours + "deg)";
    document.querySelector(".minsHand").style.transform = "rotate(" + minutes + "deg)";
    document.querySelector(".secsHand").style.transform = "rotate(" + seconds + "deg)";
},1000);
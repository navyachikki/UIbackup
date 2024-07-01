var count = 0;
var addBlockToContainer = () => {
    count++;
    var divTag = document.createElement("div");
    divTag.innerText = `BLOCK  ${count}`;
    document.querySelector(".contaienr").append(divTag);

    // if (count == 5) {
    //     clearInterval(jobInterval);
    // }

    if (count == 5) {
         myWorker.terminate();
    }
}
var jobInterval;
document.addEventListener("DOMContentLoaded", () => {
    jobInterval = setInterval(() => {
        addBlockToContainer();
    }, 1000);

    showDate();

   
});

var showDate = () => {
    var date = new Date();
    
}



var myWorker = new Worker("worker/dateWorker.js");

myWorker.onmessage = (event) => {
    
    document.querySelector(".dateContainer").innerText = event.data;
};

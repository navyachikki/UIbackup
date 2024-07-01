for (var i = 1; i <= 99; i++) {
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "coin");
    divTag.innerHTML = i;
    document.querySelector(".Block").append(divTag);
}

var getRandomNumber = () => {
   var randomValue = Math.floor((Math.random() * 99) + 1);
   generateNumber(randomValue);
}

var generateNumber = (Value) => {
    document.querySelector(".Number").innerHTML = Value;
}
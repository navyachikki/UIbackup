var otpGenerate = () => {
    var otpSize = prompt("enter otp size");
    var otpValue = '';
    var randomValue = () => {
        var round = Math.round(Math.random() * 9);
        return round;
    };
    for (i = 0; i < otpSize; i++) {
        otpValue = otpValue + randomValue();
    };
    document.querySelector(".otpBlock").innerText = otpValue;
}
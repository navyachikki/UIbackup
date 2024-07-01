var generateCaptcha = () => {
    var captcha = [otpGenerate(), UcaseGenerate(), LcaseGenerate(), UcaseGenerate(), otpGenerate()];
    var randomcaptcha = '';
    for (let i = 0; i < 5; i++) {
        var index = Math.floor(Math.random() * captcha.length);
        randomcaptcha = randomcaptcha + captcha[index];
        captcha.splice(index, 1);
    }
    document.querySelector(".captchaBlock").innerText = randomcaptcha
}


var otpGenerate = () => {
    var round = Math.round(Math.random() * 9);
    return round;
}

var UcaseGenerate = () => {
    var min1 = 65;
    var max1 = 90;
    var Ucase = Math.floor(Math.random() * (max1 - min1) + min1);
    var val1 = String.fromCharCode(Ucase);
    return val1;
}

var LcaseGenerate = () => {
    var min2 = 97;
    var max2 = 122;
    var Lcase = Math.floor(Math.random() * (max2 - min2) + min2);
    var val2 = String.fromCharCode(Lcase);
    return val2;
}

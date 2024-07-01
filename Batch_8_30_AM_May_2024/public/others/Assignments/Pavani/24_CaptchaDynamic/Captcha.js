var getRandomCaptcha = (type) => {
    var type = Math.round(Math.random() * 2);
    if(type == '0' ){
        var min = 97;
        var max = 122;
    }else if (type == '1'){
        var min = 65;
        var max = 90;
    }else{
        var min = 48;
        var max = 57;
    }

    var randomChar = Math.floor((Math.random() * (max - min) + min));
    return String.fromCharCode(randomChar);
}

var getCaptcha = () => {
    var captchaText ='';
    for(var i = 1; i <= 5; i++){
        captchaText = captchaText + getRandomCaptcha();
    }
    document.querySelector(".captcha").innerHTML = captchaText;
}
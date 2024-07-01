var generateCaptchaText = () => {
            
    /* Scenario 1: const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(captcha);
    //  return captcha;
    document.querySelector(".captchaText").innerHTML = captcha; */

    var captcha = getRandomCaptchaFormat();
    document.querySelector('.captchaText').innerHTML = captcha;
}


var getRandomCaptchaFormat = () => {
    var captcha ='';
    /* Scenario 2 using Arrays dynamic getting the cpatcha format */
    var formatCaptcha = ['U', 'N' ,'L'];
    console.log(formatCaptcha);
    for (var i = 0; i < 5; i++) {
        var randomValue = formatCaptcha[Math.floor(Math.random() * formatCaptcha.length)];
        if (randomValue == 'L') {
            captcha += getRandomChar('L');
        } else if (randomValue == 'U') {
            captcha += getRandomChar('U');
        } else {
            captcha += getRandomValue();
        }
        
    }
    return captcha;
}


// format -> ULLNN, ULNLU LUNUS
// getCapthca(format)


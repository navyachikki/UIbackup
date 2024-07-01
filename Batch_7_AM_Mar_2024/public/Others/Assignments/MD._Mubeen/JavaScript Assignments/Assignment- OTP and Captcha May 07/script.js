// For OTP Generation

//For Number OTP Generation
var numberOtp = () => {
    var otpGenerate = () => {
        var otpValue = "";
        var otpsize = document.querySelector("#nsize").value;
        for (i = 0; i < otpsize; i++) {
            otpValue += randomOtp();
        }
        if (otpsize == 0 || otpsize >= 10) {
            otpValue = "Error"
        }
        document.querySelector("#numotp").innerHTML = otpValue;
    }
    // For OTP Generation
    var randomOtp = () => {
        return Math.round(Math.random() * 9);
    }
    otpGenerate();
}

// For LowerCase Alphabet Generation
var lcOtp = () => {
    var otpGenerate = () => {
        var otpValue = randomOtp();
        var otpsize = document.querySelector("#lcsize").value;
        for (i = 0; i < otpsize - 1; i++) {
            otpValue += randomOtp();
        }
        if (otpsize == 0 || otpsize >= 10) {
            otpValue = "Error"
        }
        document.querySelector("#lcOtp").innerHTML = otpValue;
    }
    // For OTP Generation
    var randomOtp = () => {
        var min = 97;
        var max = 122;
        var randomValue = Math.random() * (max - min) + min;
        var otp = String.fromCharCode(randomValue);
        return otp;
    }
    otpGenerate();
}
// For UpperCase Alphabet Generation
var ucOtp = () => {
    var otpGenerate = () => {
        var otpValue = randomOtp();
        var otpsize = document.querySelector("#ucsize").value;
        for (i = 0; i < otpsize - 1; i++) {
            otpValue += randomOtp();
        }
        if (otpsize == 0 || otpsize >= 10) {
            otpValue = "Error"
        }
        document.querySelector("#ucOtp").innerHTML = otpValue;
    }
    // For OTP Generation
    var randomOtp = () => {
        var min = 65;
        var max = 90;
        var randomValue = Math.random() * (max - min) + min;
        var otp = String.fromCharCode(randomValue);
        return otp;
    }
    otpGenerate();
}
// For Alpha Numeric Generation
var anOtp = () => {
    var strings = ["U", "L", "N"];
    var stringLength = document.querySelector("#ansize").value;
    var pattern = "";
    for (i = 0; i < stringLength; i++) {
        var index = Math.round(Math.random() * (strings.length -1));
        pattern += strings[index];
    }
    var split = pattern.split("");
    // For OTP Generation
    var lcOtp = () => {
        var min = 97;
        var max = 122;
        var lcstring = Math.random() * (max - min) + min;
        return String.fromCharCode(lcstring)
    }
    var ucOtp = () => {
        var min = 65;
        var max = 90;
        var ucstring = Math.random() * (max - min) + min;
        return String.fromCharCode(ucstring)
    }
    var numberOtp = () => {
        return Math.round(Math.random() * 9);
    }
    var randomstring = "";
    for (i = 0; i < split.length; i++) {
        switch(split[i]) {
            case "L" :
                randomstring += lcOtp();
                break;
            case "U" :
                randomstring += ucOtp();
                break;
            case "N" :
                randomstring += numberOtp();
                break;
        }
    }
    if (stringLength == 0 || stringLength >= 10) {
        randomstring = "Error"
    }
    document.querySelector("#anOtp").innerHTML = randomstring;
}
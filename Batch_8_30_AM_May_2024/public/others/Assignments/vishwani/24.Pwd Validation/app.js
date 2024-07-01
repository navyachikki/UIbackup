var registerUser = () => {
    var userData = {};
    userData.userId = document.querySelector("#userId").value;
    userData.userId = userData.userId.trim();

    if (userData.userId == '') {
        document.querySelector(".userIdErr").style.display = 'block';
    } else {
        document.querySelector(".userIdErr").style.display = 'none';
    }

    userData.password = document.querySelector("#actPwd").value;
    userData.mailId = document.querySelector("#actMailId").value;
    var actReenterPwd = document.querySelector("#actReenterPwd").value;
    console.log(userData);
}

var validateUserId = (event) => {
    console.log(event);
    if (event.keyCode >= 47 && event.keyCode <= 58) {
        return false;
    } else {
        return true;
    }
}

var validatePwd = (event) => {
    var pwdText = document.querySelector("#actPwd").value;
    if (pwdText.length == 8) {
        document.querySelector("#pwdLenCheck").setAttribute("class", 'validated');
    } else {
        document.querySelector("#pwdLenCheck").removeAttribute("class");
    }
    
    var firstCharCharCode = pwdText.charCodeAt(0);
    if (firstCharCharCode >= 65 && firstCharCharCode <= 90) {
        document.querySelector("#firtCharCheck").setAttribute("class", 'validated')
    } else {
        document.querySelector("#firtCharCheck").removeAttribute("class")
    }
    

    var digitCount = checkDigitCount(pwdText);
    if (digitCount >= 1 && digitCount <= 2) {
        document.querySelector("#digitCheck").setAttribute("class", 'validated');
    } else {
        document.querySelector("#digitCheck").removeAttribute("class");
    }

    var lastCharCharCode = pwdText.charCodeAt(7);
        if (lastCharCharCode >= 97 && lastCharCharCode <= 122) {
            document.querySelector("#lastCharCheck").setAttribute("class","validated")
        } else {
            document.querySelector("#lastCharCheck").removeAttribute("class")
        }
    

    var symbolCount = checkSpecialChar(pwdText)

    if (symbolCount == 1) {
        document.querySelector("#checkSpecialChar").setAttribute("class", "validated")
    } else {
        document.querySelector("#checkSpecialChar").removeAttribute("class")
    }



}

    var checkSpecialChar = (msg) => {
        console.log(msg)
        var charCount = 0
        for (var i = 0; i< msg.length; i++) {
            var charCode = msg.charCodeAt(i);
            
            if (charCode == 35|| charCode ==36|| charCode == 38|| charCode == 64) {
                charCount++;
            }
        }
        return charCount;
    }
    

 var checkDigitCount = (msg) => {
    var digitCount = 0;
    for (var i = 0 ; i < msg.length; i++) {
        var charCode = msg.charCodeAt(i);
        if (charCode >= 47 && charCode <= 58) {
            digitCount++;
        }
    }
    return digitCount;

}

var showOrHideIcons = (selector1, selector2, textBoxSelector) => {    
    document.querySelector(selector1).style.display = 'none';
    document.querySelector(selector2).style.display = 'inline-block';

    if (selector2.match(/slash/)) {
        document.querySelector(textBoxSelector).setAttribute("type", 'text')
    } else {
        document.querySelector(textBoxSelector).setAttribute("type", 'password')
    }

}
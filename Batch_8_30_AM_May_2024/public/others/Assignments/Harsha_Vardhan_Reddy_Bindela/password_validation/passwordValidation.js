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
    // console.log(userData);
}

var validateUserId = (event) => {
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

    var lastCharCharCode = pwdText.charCodeAt(7);
    console.log("LastChar"+ lastCharCharCode)
    if (lastCharCharCode >= 97 && lastCharCharCode <= 122) {
        console.log("one")
        document.querySelector("#lastCharCheck").setAttribute("class", 'validated')
    } else {
        document.querySelector("#lastCharCheck").removeAttribute("class")
    }

    var digitCount = checkDigitCount(pwdText);
    if (digitCount >= 1 && digitCount <= 2) {
        document.querySelector("#digitCheck").setAttribute("class", 'validated');
    } else {
        document.querySelector("#digitCheck").removeAttribute("class");
    }
    var symbolCount = checkSymbolCount(pwdText);;
    if (symbolCount == 1) {
        document.querySelector("#symbolCheck").setAttribute("class", 'validated');
    } else {
        document.querySelector("#symbolCheck").removeAttribute("class");
    }
    
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

var checkSymbolCount = (msg) => {
    var symbolCount = 0;
    var charCode = "!".charCodeAt(0);
    for (var i = 0 ; i < msg.length; i++) {
        var charCode = msg.charCodeAt(i);
        if (charCode >= 33 && charCode <= 47 || charCode >= 58 && charCode <= 64) {
            symbolCount++;
        }
    }
    return symbolCount;
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
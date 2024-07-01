var userAccountDetails = {};

var registerUser = () => {
    userAccountDetails.accountId = document.querySelector("#userId").value;
    userAccountDetails.accountId = userAccountDetails.accountId.trim();
    document.querySelector("#userId").value = userAccountDetails.accountId;
    userAccountDetails.accountPwd = document.querySelector("#userPassword").value;
    var reenterPwd = document.querySelector("#reenterPwd").value;
    userAccountDetails.mailId = document.querySelector("#userMailId").value;


    // accountIdValidation
    if (userAccountDetails.accountId == '') {
        document.querySelector(".idError").style.display = 'block';
    } else {
        document.querySelector(".idError").style.display = 'none';
    }
    document.querySelector(".idError").style.display = (userAccountDetails.accountId == '') ? 'block' : 'none';

    document.querySelector(".msg").style.display = 'block';
    console.log(userAccountDetails);
}

var validateSpace = (event) => {
    console.log(event);
    if (event.charCode == 32) { // handling space
        return false;
    } else {
        return true;
    }
}

var showValidationList = (event) => {
    document.querySelector(".pwdValidationList").style.display = 'block';
}





    var specialSymbolCount = 0;
var validateUserPwd = (event) => {
    console.log(event)
    if (event.target.value.length == 8) {
        document.querySelector("#lengthValidation").setAttribute("class", 'validated');
    } else {
        document.querySelector("#lengthValidation").removeAttribute("class");
    }


    // Check for ^@#& symbols
    
    var symbols = event.target.value;
    for(var j =0 ; j<8; j++){
    console.log("value of symbol :"+symbols);
    console.log("Symbol code"+symbols.charCodeAt(j));
    if (symbols.charCodeAt(j)== '94' || symbols.charCodeAt(j)== "64" || symbols.charCodeAt(j)== "35" || symbols.charCodeAt(j)== "38") {
        specialSymbolCount++;
    }
}
    console.log("Special count value : "+specialSymbolCount);
    if (specialSymbolCount == 1) {
        document.querySelector("#specialSymbolValidation").setAttribute("class", 'validated');
    } else {
        document.querySelector("#specialSymbolValidation").removeAttribute("class");
        // document.querySelector("#specialSymbolValidation").classList.remove("validated");
    }


    // validate first char uppercase
    var accntPwd = event.target.value;
    console.log();
    console.log(accntPwd.charCodeAt(0));
    if ((accntPwd.charCodeAt(0) >= 65) && (accntPwd.charCodeAt(0) <= 90)) {
        document.querySelector("#upperCaseChar").setAttribute("class", 'validated');
    } else {
        document.querySelector("#upperCaseChar").removeAttribute("class");
    }

    // Should have min one numeric

    for (var i = 0; i < 8; i++) {
        var pwdno = event.target.value;
        console.log();
        console.log(pwdno.charCodeAt(i));
        if ((pwdno.charCodeAt(i) >= 48) && (accntPwd.charCodeAt(i) <= 57)) {
            document.querySelector("#minOneNumeric").setAttribute("class", 'validated');
        } else {
            document.querySelector("#minOneNumeric").removeAttribute("class");
        }
    }

    //  Should Not Contain Space 
    for (var k = 0; k < 8; k++) {
        var charspace = event.target.value;
        console.log();
        console.log(charspace.charCodeAt(k));
        if (charspace.charCodeAt(k) != " ") { // handling space
            document.querySelector("#notContainSpace").setAttribute("class", 'validated');
        } else {
            document.querySelector("#notContainSpace").removeAttribute("class");

        }
    }
}


    //  reEnterPassword 

    var changeTextType = (event) => {
        console.log(event.target.checked);
        if (event.target.checked) {
            document.querySelector("#userPassword").setAttribute("type", 'text');
        } else {
            document.querySelector("#userPassword").setAttribute("type", 'password');
        }
    }

    
var userAccountDetails = {};

var registerUser = () => {
    userAccountDetails.accountId = document.querySelector("#userId").value;
    userAccountDetails.accountpwd = document.querySelector("#userPassword").value;
    var reenteruserPassword = document.querySelector("#reenteruserPassword").value;
    userAccountDetails.mailId = document.querySelector("#userMailId").value;

    //Id validation- not be empty,trim spaces, space not allowed
    //
    if (userAccountDetails.accountId == "") {
        document.querySelector(".idError").style.display = "block";
    } else {
        document.querySelector(".idError").style.display = "none";
    }

    //password cannot be empty
    if (userAccountDetails.accountpwd == "") {
        document.querySelector(".passError").style.display = "block";
    } else {
        document.querySelector(".passError").style.display = "none";
    }

    if (reenteruserPassword == "") {
        document.querySelector(".repassError").style.display = "block";
    } else {
        document.querySelector(".repassError").style.display = "none";
    }

    //mail id cannot be empty    
    if (userAccountDetails.mailId == "") {
        document.querySelector(".emailError").style.display = "block";
    } else {
        document.querySelector(".emailError").style.display = "none";
    }



    document.querySelector(".msg").style.display = "block";
    // console.log(userAccountDetails);
};

//space not allowed in userId
var validateSpace = (event) => {
    if (event.keyCode == 32) {
        return false;
    } else {
        return true;
    }
};

//Min and max length of pwd is 8 and 12

var validatePwd = (event) => {
    document.querySelector(".passCriteria").style.display = "block";
    if (event.target.value.length >= 8 && event.target.value.length <= 12) {
        document.querySelector(".pwdLength").style.color = "green";
        document.querySelector(".pwdLength").style.fontWeight = "bold";
    } else {
        document.querySelector(".pwdLength").style.color = "black";
    }




    //Password should only start with uppercase
    //console.log(event.target.value.charCodeAt(0));
    if (
        event.target.value.charCodeAt(0) >= 65 &&
        event.target.value.charCodeAt(0) <= 90
    ) {
        document.querySelector(".pwdUpperCase").style.color = "green";
        document.querySelector(".pwdUpperCase").style.fontWeight = "bold";
    } else {
        document.querySelector(".pwdUpperCase").style.color = "black";
    }



};



var specialSymbolCount = 0;
var numCount = 0;
var validatePwdSpace = (event) => {
    //Password should have min and max one special character
    console.log(event.keyCode);
    if (event.keyCode == 35 || event.keyCode == 38 || event.keyCode == 64 || event.keyCode == 94) {
        specialSymbolCount++;
        console.log(specialSymbolCount);
    }
    if (specialSymbolCount == 1) {
        document.querySelector(".specialSymbol").style.color = "green";
        document.querySelector(".specialSymbol").style.fontWeight = "bold";
    } else {
        document.querySelector(".specialSymbol").style.color = "black";
    }

    //One numeric
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        numCount++;
    }
    if (numCount == 1) {
        document.querySelector(".pwdNumeric").style.color = "green";
        document.querySelector(".pwdNumeric").style.fontWeight = "bold";
    } else {
        document.querySelector(".pwdNumeric").style.color = "black";
    };

    //No space in password
    if (event.keyCode == 32) {
        document.querySelector(".noSpacePwd").style.color = "green";
        document.querySelector(".noSpacePwd").style.fontWeight = "bold";
        return false;
    } else {
        document.querySelector(".noSpacePwd").style.color = "black";
        return true;
    }
};

//Show password checkbox
var showPass = (event) => {
    if (event.target.checked == true) {
        document.querySelector("#userPassword").setAttribute("type", "text");
    } else {
        document.querySelector("#userPassword").setAttribute("type", "password");
    }
};

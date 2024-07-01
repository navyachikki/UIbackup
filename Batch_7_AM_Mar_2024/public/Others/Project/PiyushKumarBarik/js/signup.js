var validateSpace = (event) => {
    if (event.keyCode == 32) {
        return false;
    } else {
        return true;
    }
};

var validatePwd = (event) => {
    document.querySelector(".passCriteria").style.display = "block";
    if (event.target.value.length >= 8) {
        document.querySelector(".pwdLength").style.color = "rgb(152, 251, 152)";
        document.querySelector(".pwdLength").style.fontWeight = "bold";
    } else {
        document.querySelector(".pwdLength").style.color = "black";
    }

    if (
        event.target.value.charCodeAt(0) >= 65 &&
        event.target.value.charCodeAt(0) <= 90
    ) {
        document.querySelector(".pwdUpperCase").style.color = "rgb(152, 251, 152)";
        document.querySelector(".pwdUpperCase").style.fontWeight = "bold";
    } else {
        document.querySelector(".pwdUpperCase").style.color = "black";
    }
}

var specialSymbolCount = 0;
var numCount = 0;
var validatePwdSpace = (event) => {
    //Password should have min and max one special character
    // console.log(event.keyCode);
    if (event.keyCode == 35 || event.keyCode == 38 || event.keyCode == 64 || event.keyCode == 94) {
        specialSymbolCount++;
        // console.log(specialSymbolCount);
    }
    if (specialSymbolCount == 1) {
        document.querySelector(".specialSymbol").style.color = "rgb(152, 251, 152)";
        document.querySelector(".specialSymbol").style.fontWeight = "bold";
    } else {
        document.querySelector(".specialSymbol").style.color = "black";
    }

    //One numeric
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        numCount++;
    }
    if (numCount == 1) {
        document.querySelector(".pwdNumeric").style.color = "rgb(152, 251, 152)";
        document.querySelector(".pwdNumeric").style.fontWeight = "bold";
    } else {
        document.querySelector(".pwdNumeric").style.color = "black";
    };

    //No space in password
    if (event.keyCode == 32) {
        document.querySelector(".noSpacePwd").style.color = "rgb(152, 251, 152)";
        document.querySelector(".noSpacePwd").style.fontWeight = "bold";
        return false;
    } else {
        document.querySelector(".noSpacePwd").style.color = "black";
        return true;
    }
};

var registerUser = () =>{
    if (document.querySelector("#pwd").value != document.querySelector("#pwdConfirm").value){
        alert("passwords not matching")
    }
    else{
        alert("passwords matched")
    }
}
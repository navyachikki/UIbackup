var userDtls = {};

var registerUser =() => {
    userDtls.JsonId = document.querySelector("#userId").value;
    userDtls.JsonId = userDtls.JsonId.trim();
    if (userDtls.JsonId == '') {
        document.querySelector(".IdError").style.display = 'block';
        return;
    } else
    {
        document.querySelector(".IdError").style.display = 'none';
    }

    userDtls.JsonPass = document.querySelector("#userPass").value;


    var reTypePass =  document.querySelector("#userRptPass").value;
    userDtls.JsonEmail = document.querySelector("#userEMail").value;

    document.querySelector(".msg").style.display = 'block';
    console.log(userDtls);
};


var validateSpace = (event) => {
    if (event.keyCode == 32) {
        return false;
    } else {
        return true;
    }
}

var showPassValidation = (event) => {
    document.querySelector(".PassValidDisplay").style.display = 'block';
}

var validateUserPass = (event) => {

    var storePassword = event.target.value;   //(Password Text Value is stored in this Veriable) this Veriable Used is For All Condition Check
    var spacialSbolCount = 0;  //Use To Store Spacial Symbols Count
    var spaceCount = 0; //Use to Store Space Count in Password
    var numberCount = 0; //Number Validation (How Many Numbers in Password)
    
    if (event.target.value.length == 8) {
        document.querySelector ("#lenthValidation").setAttribute("class",'lenthValidation');
    } else {
        document.querySelector ("#lenthValidation").removeAttribute("class", 'PassValidDisplay');
    }

    //Validating For The Spacial Char
    for (var i=0; i < 8; i++) {
        if (storePassword.charCodeAt(i)== '94' || storePassword.charCodeAt(i)== "64" || storePassword.charCodeAt(i)== "35" || storePassword.charCodeAt(i)== "38") {
                spacialSbolCount = spacialSbolCount + 1;
            }  
    }

    if (spacialSbolCount == 1) {
        document.querySelector ("#SplSymbolValidation").setAttribute("class",'SplSymbolValidation');
    } else {
        document.querySelector ("#SplSymbolValidation").removeAttribute("class", 'PassValidDisplay');
    }

    //Validation For minimum One Number to Enter
    for (var i = 0; i < 8; i++) {
        if ((storePassword.charCodeAt(i) >= 48) && (storePassword.charCodeAt(i) <= 57)) {
            numberCount = numberCount + 1;
        }  
    }

    if (numberCount >= 1) {
        document.querySelector ("#NumberValidation").setAttribute("class",'NumberValidation');
    } else {
        document.querySelector ("#NumberValidation").removeAttribute("class", 'PassValidDisplay');
    }

    //Validation For Space in Password
    for (var i = 0; i < 8; i++) {
        if (storePassword.charCodeAt(i) == 32) {
            spaceCount = spaceCount + 1;
        }  
    }

    if (spaceCount >= 1) {
        document.querySelector ("#SpaceValidation").removeAttribute("class", 'PassValidDisplay');
    } else {
        document.querySelector ("#SpaceValidation").setAttribute("class",'SpaceValidation');
    }

    //Validate First Char Upper Case Or Not..?
    if ((storePassword.charCodeAt(0) >= 65) && (storePassword.charCodeAt(0) <= 90)) {
        document.querySelector("#upperCaseChar").setAttribute("class", 'upperCaseChar')
    } else {
        document.querySelector("#upperCaseChar").removeAttribute("class", 'PassValidDisplay');
    }
}

var ChngPassTextType = (event) => {
    if(event.target.checked) {
        document.querySelector("#userPass").setAttribute("type", 'text');
    } else {
        document.querySelector("#userPass").setAttribute("type", 'password');
    }
}
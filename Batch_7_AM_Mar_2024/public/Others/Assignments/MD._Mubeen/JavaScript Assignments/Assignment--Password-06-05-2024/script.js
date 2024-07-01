var employeeAccountdetail = {};
    var employeeLogin = () => {
        employeeAccountdetail.accountId = document.querySelector("#userId").value;
        employeeAccountdetail.accountId = employeeAccountdetail.accountId.trim();
        document.querySelector("#userId").value = employeeAccountdetail.accountId;
        employeeAccountdetail.mailId = document.querySelector("#mail").value;
        employeeAccountdetail.accountPassword = document.querySelector("#paswrd").value;
        employeeAccountdetail.rEnterpassword = document.querySelector("#repswrd").value;

        document.querySelector("#idError").style.display = (employeeAccountdetail.accountId == '') ? 'block' : 'none';

        document.querySelector("#logged").style.display = 'block';

        console.log(employeeAccountdetail);

    }
    var validatespace = (event) => {
        if (event.charCode == 32) {
            return false;
        } else {
            return true;
        }
    }
    var showValidationList = (event) => {
        document.querySelector("#dataValidation").style.display = "block";
    }
    var symbolCount = 0;

    var validationParams = (event) => {
        // console.log(event);
            // for character length
        if (event.target.value.length >= 8 && event.target.value.length <=16) {
            document.querySelector("#charValidate").setAttribute ("class", "dataValidation");
        } else {
            document.querySelector("#charValidate").removeAttribute ("class");
        }
            // For UpperCase
        if ((event.target.value.charCodeAt(0) >= 65) && (event.target.value.charCodeAt(0) <= 90)) {
            document.querySelector("#caseValidate").setAttribute ("class", "dataValidation");
        } else {
            document.querySelector("#caseValidate").removeAttribute ("class");
        }
            // For Numerical
        if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) {
            document.querySelector("#numValidate").setAttribute ("class", "dataValidation");
        } else {
            document.querySelector("#numValidate").removeAttribute ("class");
        }
            // For Space
        if ((event.keyCode == 32) == false) {
            document.querySelector("#spaceValidate").setAttribute ("class", "dataValidation");
        } else {
            document.querySelector("#spaceValidate").removeAttribute ("class")
        }
            // for Symbols
        if (event.key == "@" || event.key == "!" || event.key == "#" || event.key == "^") {
            symbolCount++;
            // console.log(symbolCount);
        }
        if (symbolCount == 1) {
            document.querySelector("#symbolValidate").setAttribute ("class", "dataValidation");
        } else if (symbolCount != 1) {
            document.querySelector("#symbolValidate").removeAttribute ("class");
        }
        console.log(event);
    }
    var showPassword = (event) => {
        if (event.target.checked) {
            document.querySelector("#paswrd").setAttribute("type", 'text');
        } else {
            document.querySelector("#paswrd").setAttribute("type", 'password');
        }
    }
    var showMatch = (a1) => {
        // console.log(a1);
    }
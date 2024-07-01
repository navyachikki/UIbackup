var updateSignupCaptchaText = () => {
    generatedCaptchaText = captchaUtilObj.generateCaptcha('#signupCaptchaImage');
}

var passwordMatching = () => {
    var userEnteredCaptchaText = $("#userSignupcaptchaText").val();
    // console.log(userEnteredCaptchaText)
    if (userEnteredCaptchaText == generatedCaptchaText) {
        document.querySelector("#signupcapErr").style.display = 'none';
        window.open("/index.html", "_self")
        return;
    }
    else {
        document.querySelector("#signupcapErr").style.display = 'block'
    }
}

	

// Inderjeet
// Show Passwrod :
var ChangeType = (event) => {
    if (event.target.checked) {
        document.querySelector("#signup_accountPassword").setAttribute("type", "text");
    }
    else {
        document.querySelector("#signup_accountPassword").setAttribute("type", "password");
    }
}

// Password validation Part :
var newUserSignup = () => {

    // UserId Mandate :
    var userId = document.querySelector("#signup_accountId").value;

    // Accsessing the password and re-enter Password :
    var password = document.querySelector("#signup_accountPassword").value;
    var rePassword = document.querySelector("#signup_accountPassword_reenter").value;

    //Error message if Password and repassword not matched :
    var displayMessage = document.querySelector("#pwdNotMatching");

    if (userId == '') {
        document.querySelector("#userIdEmpty").style.display = 'block';
        return;
    }
    else {
        document.querySelector("#userIdEmpty").style.display = 'none';
    }

    if (password == '') {
        document.querySelector("#pwdError").style.display = 'block';
        return;
    }
    else {
        document.querySelector("#pwdError").style.display = 'none';
    }

    if (password != rePassword) {
        displayMessage.innerHTML = "Password is not matching";
    }
    else {
        passwordMatching()
        return;
    }
}
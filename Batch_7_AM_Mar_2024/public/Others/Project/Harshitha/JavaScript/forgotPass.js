document.addEventListener("DOMContentLoaded", () => {
    var uemail = document.getElementById("uMail");
    var emailErr = document.getElementById("emailErr");
    var password1 = document.getElementById("ForgotPass");
    var password2 = document.getElementById("NewPass");
    var pwdErr = document.getElementById("pwdErr");
    var matchMessage = document.getElementById("matchMessage");

    var eightchar = document.getElementById("eightchar");
    var lowerCase = document.getElementById("lowerCase");
    var upperCase = document.getElementById("upperCase");
    var containNumber = document.getElementById("containNumber");
    var specialCharacters = document.getElementById("specialCharacters");
    var passwordCriteria = document.getElementById("passwordCriteria");

    function validatePassword() {
        var userPassword = password1.value;

        // Check lowercase letters
        var pattern = /[a-z]/g;
        if (userPassword.match(pattern)) {
            lowerCase.classList.add("valid");
            lowerCase.classList.remove("invalid");
        } else {
            lowerCase.classList.remove("valid");
            lowerCase.classList.add("invalid");
        }

        // Check uppercase letters
        pattern = /[A-Z]/g;
        if (userPassword.match(pattern)) {
            upperCase.classList.add("valid");
            upperCase.classList.remove("invalid");
        } else {
            upperCase.classList.remove("valid");
            upperCase.classList.add("invalid");
        }

        // Check numbers
        pattern = /[0-9]/g;
        if (userPassword.match(pattern)) {
            containNumber.classList.add("valid");
            containNumber.classList.remove("invalid");
        } else {
            containNumber.classList.remove("valid");
            containNumber.classList.add("invalid");
        }

        // Check length
        if (userPassword.length >= 8) {
            eightchar.classList.add("valid");
            eightchar.classList.remove("invalid");
        } else {
            eightchar.classList.remove("valid");
            eightchar.classList.add("invalid");
        }

        // Check special characters
        pattern = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
        if (userPassword.match(pattern)) {
            specialCharacters.classList.add("valid");
            specialCharacters.classList.remove("invalid");
        } else {
            specialCharacters.classList.remove("valid");
            specialCharacters.classList.add("invalid");
        }

        // Check if passwords match
        if (password1.value === password2.value) {
            matchMessage.classList.add("valid");
            matchMessage.classList.remove("invalid");
            matchMessage.textContent = "Passwords match";
        } else {
            matchMessage.classList.remove("valid");
            matchMessage.classList.add("invalid");
            matchMessage.textContent = "Passwords do not match";
        }

        // Update input borders
        password1.classList.toggle("valid", password1.value === password2.value && password1.value.length >= 8);
        password1.classList.toggle("invalid", password1.value !== password2.value || password1.value.length < 8);
        password2.classList.toggle("valid", password1.value === password2.value && password2.value.length >= 8);
        password2.classList.toggle("invalid", password1.value !== password2.value || password2.value.length < 8);
    }

    // Keep the password criteria list visible while the user is typing
    password1.addEventListener('input', function() {
        passwordCriteria.style.display = 'block';
    });

    // Hide the password criteria list when the user leaves the password field
    password1.addEventListener('blur', function() {
        passwordCriteria.style.display = 'none';
    });

    // Keep the password criteria list visible while the user is typing
    password2.addEventListener('input', function() {
        pwdErr.style.display = 'block';
    });

    // Hide the password criteria list when the user leaves the password field
    password2.addEventListener('blur', function() {
        pwdErr.style.display = 'none';
    });

    function validateEmail() {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (uemail.value.match(emailPattern)) {
            emailErr.classList.add("valid");
            emailErr.classList.remove("invalid");
            emailErr.style.display = "none";
        } else {
            emailErr.classList.remove("valid");
            emailErr.classList.add("invalid");
            emailErr.style.display = "block";
        }
    }

    password1.onkeyup = validatePassword;
    password2.onkeyup = validatePassword;
    uemail.onkeyup = validateEmail;
});

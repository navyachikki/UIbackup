document.addEventListener("DOMContentLoaded", () => {
    var passInput = document.getElementById("passInput");
    var passInput2 = document.getElementById("passInput2");
    var matchMessage = document.getElementById("match");//password error message
    var uemail = document.getElementById("uemail");
    var emailErr = document.querySelector(".MailErr");

    var eightchar = document.getElementById("eightchar");
    var lowerCase = document.getElementById("lowerCase");
    var upperCase = document.getElementById("upperCase");
    var containNumber = document.getElementById("containNumber");
    var specialCharacters = document.getElementById("specialCharacters");

    function validatePassword() {
        var userPassword = passInput.value;


        // Check lowercase letters
        var pattern = /[a-z]/g;
        if (userPassword.match(pattern)) {
            lowerCase.classList.add("valid");
            lowerCase.classList.remove("invalid");
            //console.log("lowerCase")
         } else {
            lowerCase.classList.remove("valid");
            lowerCase.classList.add("invalid");
            //console.log("invalid lowercase")
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
        if (passInput.value === passInput2.value) {
            matchMessage.classList.add("valid");
            matchMessage.classList.remove("invalid");
            matchMessage.textContent = "Passwords match";
        } else {
            matchMessage.classList.remove("valid");
            matchMessage.classList.add("invalid");
            matchMessage.textContent = "Passwords do not match";
        }

        // Update input borders
        passInput.classList.toggle("valid", passInput.value === passInput2.value && passInput.value.length >= 8);
        //console.log("length equal")
        passInput.classList.toggle("invalid", passInput.value !== passInput2.value || passInput.value.length < 8);
        passInput2.classList.toggle("valid", passInput.value === passInput2.value && passInput2.value.length >= 8);
        passInput2.classList.toggle("invalid", passInput.value !== passInput2.value || passInput2.value.length < 8);
       // console.log("length not equal")
    }
    // Keep the password criteria list visible while the user is typing
    passInput.addEventListener('input', function() {
        passwordCriteria.style.display = 'block';
    });

    // Hide the password criteria list when the user leaves the password field
    passInput.addEventListener('blur', function() {
        passwordCriteria.style.display = 'none';
    });
    // Keep the password criteria list visible while the user is typing
    passInput2.addEventListener('input', function() {
        match.style.display = 'block';
    });

    // Hide the password criteria list when the user leaves the password field
    passInput2.addEventListener('blur', function() {
        match.style.display = 'none';
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

    passInput.onkeyup = validatePassword;
    passInput2.onkeyup = validatePassword;
    uemail.onkeyup = validateEmail;

    
        });
        
    
    const form = document.getElementById("login-page");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent the default form submission
        console.log("Form submitted");
        const Name = document.getElementById("uname").value ;
        const Email = document.getElementById("uemail").value ;
        const password1 =document.getElementById("passInput").value;
        const password2 = document.getElementById("passInput2").value ;

// storing data in json format
const accountDetails={
    FullName:Name,
    Email:Email,
    password:password1,
   confirmPassword:password2
};



// store the user data in local storage
localStorage.setItem("accountDetails", JSON.stringify(accountDetails));
console.log("stored the values")

const storedData = localStorage.getItem("accountDetails");
console.log(storedData)

redirectToPage();
});

function redirectToPage() {
    window.location.href = "Login.html";
}

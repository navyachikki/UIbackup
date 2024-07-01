function validateUserId(event) {
    // User ID validation logic here
}

function showOrHideIcons(showIcon, hideIcon, inputId) {
    const input = document.querySelector(inputId);
    const showIconEl = document.querySelector(showIcon);
    const hideIconEl = document.querySelector(hideIcon);

    if (input.type === "password") {
        input.type = "text";
        showIconEl.style.display = "none";
        hideIconEl.style.display = "inline";
    } else {
        input.type = "password";
        showIconEl.style.display = "inline";
        hideIconEl.style.display = "none";
    }
}

function validatePwd(event) {
    const password = event.target.value;
    const pwdLenCheck = document.getElementById('pwdLenCheck');
    const firstCharCheck = document.getElementById('firstCharCheck');
    const digitCheck = document.getElementById('digitCheck');
    const specialCharCheck = document.getElementById('specialCharCheck');
    const lastCharCheck = document.getElementById('lastCharCheck');
    const pwdError = document.querySelector('.pwdError');
    
    const hasValidLength = password.length === 8;
    const startsWithUppercase = /^[A-Z]/.test(password);
    const containsSpecialChar = /[$#&@]/.test(password);
    const endsWithLowercase = /[a-z]$/.test(password);
    const digitMatches = password.match(/\d/g);
    const digitCount = digitMatches ? digitMatches.length : 0;
    const containsValidDigits = digitCount >= 1 && digitCount <= 2;

    pwdLenCheck.style.color = hasValidLength ? 'yellow' : 'white';
    firstCharCheck.style.color = startsWithUppercase ? 'yellow' : 'white';
    specialCharCheck.style.color = containsSpecialChar ? 'yellow' : 'white';
    lastCharCheck.style.color = endsWithLowercase ? 'yellow' : 'white';
    digitCheck.style.color = containsValidDigits ? 'yellow' : 'white';

    const isValidPassword = hasValidLength && startsWithUppercase && containsSpecialChar && endsWithLowercase && containsValidDigits;
    pwdError.style.display = isValidPassword ? 'none' : 'block';
}

function registerUser() {
    const userId = document.getElementById('userId').value;
    const actPwd = document.getElementById('actPwd').value;
    const actReenterPwd = document.getElementById('actReenterPwd').value;
    const actMailId = document.getElementById('actMailId').value;
    const userIdErr = document.querySelector('.userIdErr');

    if (!userId) {
        userIdErr.style.display = 'block';
    } else {
        userIdErr.style.display = 'none';
    }

    if (actPwd !== actReenterPwd) {
        alert('Passwords do not match');
        return;
    }

    const pwdError = document.querySelector('.pwdError');
    if (pwdError.style.display === 'block') {
        alert('Password does not meet the criteria');
        return;
    }

    // Registration logic here
    alert('User registered successfully');
}

var userDetails = {};

var registerUser = () => {
  userDetails.accountId = document.querySelector("#accountId").value;

  userDetails.accountId = userDetails.accountId.trim();
  if (userDetails.accountId == '') {
    document.querySelector(".idErr").style.display = 'block';
    return;
  } else {
    document.querySelector(".idErr").style.display = 'none';
  }



  userDetails.accountPwd = document.querySelector("#setpwd").value;
  document.querySelector(".pwdErr").style.display = userDetails.accountPwd == "" ? "block" : "none";

  userDetails.accountPpwd = document.querySelector("#confirmpwd").value;
  document.querySelector(".passErr").style.display = userDetails.accountPpwd == "" ? "block" : "none";

  userDetails.accountMail = document.querySelector("#mailId").value;
  document.querySelector(".mailErr").style.display = userDetails.accountMail == "" ? "block" : "none";

  document.querySelector(".registrationMsg").style.display = "block";

  console.log(userDetails);
}

var validateSpace = (event) => {
  if (event.keyCode == 32) {
    return false;
  }
  else{
return true;
  }
}



var validatnList = (event) => {
  document.querySelector(".pwdValidtn").style.display = "block";
}

var validateUserPwd = (event) => {
  console.log(event);

  var inputValue = event.target.value;

// SPECIAL SYMBOL VALIDATION


  var specialSymbolcount = 0;
 
  if (event.target.value.length == 8) {
    document.querySelector("#pwdLength").setAttribute("class", "validated");
  } else {
    document.querySelector("#pwdLength").removeAttribute("class");
  }


  for (var i = 0; i < 8; i++) {
    if (inputValue.charCodeAt(i) == '94' || inputValue.charCodeAt(i) == "64" || inputValue.charCodeAt(i) == "35" || inputValue.charCodeAt(i) == "38") {
      specialSymbolcount++;
    }
  }

  if (specialSymbolcount == 1) {
    document.querySelector("#specialSymbolvalidation").setAttribute("class", "validated");
  } else
    document.querySelector("#specialSymbolvalidation").removeAttribute("class");



//NUMERIC VALIDATION

  var numericCount = 0;
  for (var i = 0; i < 8; i++) {
    if ((inputValue.charCodeAt(i) >= 48) && (inputValue.charCodeAt(i) <= 57)) {
      numericCount++;
      console.log(numericCount);
    }
  }

  if (numericCount >= 1) {
    document.querySelector("#numericValidation").setAttribute("class", "validated");
  } else
document.querySelector("#numericValidation").removeAttribute("class");
 


//SPACE VALIDATION
  var spaceCount = 0;
  for (var i = 0; i < 8; i++) {
    if (inputValue.charCodeAt(i) == 32) {
      spaceCount++;
    }
  }

  if (spaceCount >= 1) {
    document.querySelector("#spaceValidation").removeAttribute("class",'notvalid');
  } else {
    document.querySelector("#spaceValidation").setAttribute("class",'validated');
  }

 // UPPERCASE VALIDATION

  if ((inputValue.charCodeAt(0) >= 65) && (inputValue.charCodeAt(0) <= 90)) {
    document.querySelector("#uppercaseValidator").setAttribute("class", "validated");
  } else
    document.querySelector("#uppercaseValidator").removeAttribute("class");
}

var showPwd = (event) => {
  
  if (event.target.checked) {
    document.querySelector("#setpwd").setAttribute("type", "text");
  } else
    document.querySelector("#setpwd").setAttribute("type", "password");
}

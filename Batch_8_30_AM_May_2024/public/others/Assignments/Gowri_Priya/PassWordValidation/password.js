var registerForm = () =>{
    var userData = {};
    userData.userid = document.querySelector("#userid").value;
    userData.userid = userData.userid.trim(); 
    userData.userpass = document.querySelector("#userpass").value; 
    userData.usermail = document.querySelector("#usermail").value; 
    var reenterpass = document.querySelector("#reenterpass").value;
    console.log(userData);
}

var validateUserId = (event) => {
    console.log(event);
    if(event.keyCode >= 47 && event.keyCode <= 58){
        return false;
    }
    else{
        return true;
    }
}

var validatePwd = (event) =>{
    console.log(event);
    var pwdText = document.querySelector("#userpass").value;
    if(pwdText.length == 6){
        document.querySelector("#pwdLenCheck").setAttribute("class", "validated");
    }
    else{
        document.querySelector("#pwdLenCheck").removeAttribute("class");
    }

    var firstCharCode = pwdText.charCodeAt(0);
    if(firstCharCode >= 65 && firstCharCode <= 90){
        document.querySelector("#firstCharCheck").setAttribute("class", "validated");
    }
    else{
        document.querySelector("#firstCharCheck").removeAttribute("class");
    }

    var digitCount = checkDigitCount(pwdText);
    if(digitCount >= 1 && digitCount <= 2){
        document.querySelector("#digitCheck").setAttribute("class", "validated");
    }
    else{
        document.querySelector("#digitCheck").removeAttribute("class");
    }


    var hasSpChar = hasSpecialChar(pwdText);
    if(hasSpChar){
        document.querySelector("#specialCharCheck").setAttribute("class", "validated");
    }
    else{
        document.querySelector("#specialCharCheck").removeAttribute("class");
    }

    var lowerCharCode = pwdText.charCodeAt(5);
    if(lowerCharCode >= 98 && lowerCharCode <= 120){
        document.querySelector("#lowerCaseCheck").setAttribute("class", "validated");
    }
    else{
        document.querySelector("#lowerCaseCheck").removeAttribute("class");
    }




}

var checkDigitCount = (msg) => {
    var digitCount = 0;
    for(var i = 0; i<msg.length;i++){
        var charCode = msg.charCodeAt(i);
        if(charCode>=47 && charCode <= 58){
            digitCount++;
        }
    }
    return digitCount;

}
var hasSpecialChar = (msg) => {
    var spChars = ['@','#','$','&'];
    for(var i = 0; i<msg.length;i++){
        var char = msg.charAt(i);
        for(var j=0;j<spChars.length;j++){
            var spCh = spChars[j];
            if(char == spCh){
                return true;
            }
        }
        
    }
    return false;
}



var showOrHideIcons = (selector1, selector2, textBoxSelector) => {    
    document.querySelector(selector1).style.display = 'none';
    document.querySelector(selector2).style.display = 'inline-block';

    if (selector2.match(/slash/)) {
        document.querySelector(textBoxSelector).setAttribute("type", 'text')
    } else {
        document.querySelector(textBoxSelector).setAttribute("type", 'password')
    }

}
var reset = () =>{
    document.querySelector("#userid").value = '';
    document.querySelector("#userpass").value = '';
    document.querySelector("#reenterpass").value = '';
    document.querySelector("#usermail").value = '';
}






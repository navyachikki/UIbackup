var userAccountDetails = {};

var registerUser = () => {
    userAccountDetails.accountId = document.querySelector("#AccountId").value;
    userAccountDetails.accountId = userAccountDetails.accountId.trim();
    document.querySelector("#AccountId").value = userAccountDetails.accountId;
    userAccountDetails.accountPwd = document.querySelector("#PwdId").value;
    var reenterPwd = document.querySelector("#ReenterId").value;
    userAccountDetails.mailId = document.querySelector("#MailId").value;


    // accountIdValidation
    if (userAccountDetails.accountId == '') {
        document.querySelector(".accountError").style.display = 'block';
    } else {
        document.querySelector(".accountError").style.display = 'none';
    }
    document.querySelector(".accountError").style.display = (userAccountDetails.accountId == '') ? 'block' : 'none';

    if(userAccountDetails.accountPwd <= 0)
        {
            document.querySelector(".pwdError").style.display='block';
        }
        else{
            document.querySelector(".pwdError").style.display='none';
        }

        //Reenter validation
        if(userAccountDetails.accountPwd ==''){
            document.querySelector(".reEnterPwdError").style.display='block';
        }else{
            document.querySelector(".reEnterPwdError").style.display='none'; 
        }

        if(userAccountDetails.accountPwd != reenterPwd){
            document.querySelector(".reEnterPwdError").style.display='block'; 
            console.log(userAccountDetails.accountPwd+" "+reenterPwd) 
        }else{
            document.querySelector(".reEnterPwdError").style.display='none'; 
        }
        // Mail Id validation
        if (userAccountDetails.mailId == '') {
            document.querySelector(".mailError").style.display = 'block';
        } else {
            document.querySelector(".mailError").style.display = 'none';
        }


        if(userAccountDetails.mailId != '' )
            {
                    document.querySelector(".msg").style.display = 'block';                 
            }

    
    console.log(userAccountDetails);
}



var validateSpace = (event) => {
    console.log(event);
    if (event.keyCode == 32) { // handling space
        return false;
    } else {
        return true;
    }
}

var validateSpacePasswd = (event) => {
    console.log(event);
    if (event.keyCode == 32) { // handling space
        return false;
        
    } else {
        if (event.target.value.length == 8)
            {
                document.querySelector("#removeSpace").setAttribute("class", 'validated');
                return true;
            }
       
    }
}

var showValidationList = (event) => {  
    document.querySelector(".pwdValidationList").style.display = 'block';
}

var specialSymbolCount = 0;
var checknumberCount=false;

var validateUserPwd = (event) => {
    console.log(event)
    if (event.target.value.length == 8) {
        document.querySelector("#lengthValidation").setAttribute("class", 'validated');
    } else {
        document.querySelector("#lengthValidation").removeAttribute("class");
    }

    // Check for ^@#& symbols
    if (event.keyCode == 54 || event.keyCode == 51 || event.keyCode == 50 || event.keyCode == 55) {
        specialSymbolCount++;
    }
    console.log(specialSymbolCount);
    if (specialSymbolCount == 1) {
        document.querySelector("#specialSymbolValidation").setAttribute("class", 'validated');
    } else {
        document.querySelector("#specialSymbolValidation").removeAttribute("class");
        //document.querySelector("#specialSymbolValidation").classList.remove("validated");
    }

    // validate first char uppercase
    var accntPwd = event.target.value;
    console.log();
    console.log(accntPwd.charCodeAt(0));
    if ((accntPwd.charCodeAt(0) >= 65) && (accntPwd.charCodeAt(0) <= 90)) {
        document.querySelector("#upperCaseChar").setAttribute("class", 'validated');
    } else {
        document.querySelector("#upperCaseChar").removeAttribute("class");
    }

     // Should have minimum 1 numeric
     if(event.keyCode >=48 && event.keyCode <=57 )
        {
            checknumberCount=true;
        }
    if(checknumberCount)
        {
            document.querySelector("#minOneNumValidation").setAttribute("class", 'validated'); 
            
        }
    else{
            document.querySelector("#minOneNumValidation").removeAttribute("class");
        }    
    console.log("NumberCount "+checknumberCount);


}

var changeTextType = (event) => 
{
    console.log(event.target.checked);
    if (event.target.checked) 
	{
        document.querySelector("#PwdId").setAttribute("type", 'text');
    } else 
	{
        document.querySelector("#PwdId").setAttribute("type", 'password');
    }
}
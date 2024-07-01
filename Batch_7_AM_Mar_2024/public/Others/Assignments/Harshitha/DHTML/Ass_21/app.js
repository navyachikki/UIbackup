var userAccountDetails={};

var registerUser=()=>{
    userAccountDetails.accountId= document.querySelector("#userId").value;
    userAccountDetails.accountId= userAccountDetails.accountId.trim();
    document.querySelector("#userId").value= userAccountDetails.userId;
    userAccountDetails.password = document.querySelector("#pwd").value;
    userAccountDetails.reEnteredPassword = document.querySelector("#re-pwd").value;
    userAccountDetails.passwordError = document.querySelector(".pwdErr");
    userAccountDetails.rePasswordError = document.querySelector(".re-pwdErr");
    userAccountDetails.mailId = document.querySelector("#MailId").value;

    //Accountvalidations
    if(userAccountDetails.accountId==""){
        document.querySelector(".IdErr").style.display ="block"
    }else{
        document.querySelector(".IdErr").style.display="none";
    }
    document.querySelector(".IdErr").style.display=(userAccountDetails.userId=="") ? 'block' : 'none';

    // pwdvalidations
    if(userAccountDetails.password<=0){
        document.querySelector(".pwdErr").style.display="block";
    }else{
        document.querySelector(".pwdErr").style.display="none";
 
    }
    //pwd Re-enter
    if(userAccountDetails.password==""){
        document.querySelector(".re-pwdErr").style.display='block';
        }else{
            document.querySelector(".re-pwdErr").style.display='none'; 
        } 
    if(userAccountDetails.password!=userAccountDetails.reEnteredPassword){
        document.querySelector(".re-pwdErr").style.display="block";
        console.log(userAccountDetails.password+" "+reEnteredPassword)

        }else{
            document.querySelector(".re-pwdErr").style.display="none"
        }

        //MailId
        if(userAccountDetails.mailId==""){
            document.querySelector(".MailErr").style.display="block";

        }else{
            document.querySelector(".MailErr").style.display="none";
            
 
        }
        if(userAccountDetails.mailId!=""){
            document.querySelector(".msg").style.display="block";
        }
        console.log(userAccountDetails)
    
    
}
var validationSpace=(event) =>{
    console.log(event);
    if(event.charCode==32){
        return false;
    }else{
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

var showValidationList = (event) =>{
    document.querySelector(".pwdValidations").style.display="block";
}

var specialSymbolCount=0;

var validateUserPwd =(event)=>{
    console.log(event)
    if (event.target.value.length==8){
        document.querySelector("#lenvalidation").setAttribute("class","validated");
    }else{
        document.querySelector("#lenvalidation").removeAttribute("class");
    }
    //check for ^@#& symbols
    if(event.keyCode==54|| event.keyCode==51|| event.keyCode==50||event.keyCode==55){
        specialSymbolCount++;
    }
    if (specialSymbolCount == 1) {
        document.querySelector("#specialSymbolValidation").setAttribute("class", 'validated');
    } else {
        document.querySelector("#specialSymbolValidation").removeAttribute("class");
    }

    //vadilate first char uppercase
    var password =event.target.value;
    // console.log();
    console.log(password.charCodeAt(0));
    if((password.charCodeAt(0)>=65)&&(password.charCodeAt(0)<=90)){
        document.querySelector("#upperCaseChar").setAttribute("class","validated");
    }else{
        document.querySelector("#upperCaseChar").removeAttribute("class");
    }
}

// var changeTextType = (event) => {
//     console.log(event.target.checked);
//     if (event.target.checked) {
//         document.querySelector("#pwd").setAttribute("type", 'text');
//     } else {
//         document.querySelector("#pwd").setAttribute("type", 'password');
//     }
// }

var changeTextType = (event) => {
    var pwdInput = document.querySelector("#showPwd");
    if (event.target.checked) {
        pwdInput.setAttribute("type", 'text');
    } else {
        pwdInput.setAttribute("type", 'password');
    }
    // Keep the checkbox checked until explicitly unchecked
    event.target.checked = true;
}


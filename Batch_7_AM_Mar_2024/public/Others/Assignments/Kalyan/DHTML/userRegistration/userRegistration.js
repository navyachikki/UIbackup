var userAccountDetails ={}
var register = () =>{
    userAccountDetails.Name = document.querySelector("#name").value;
    userAccountDetails.Name = userAccountDetails.Name.trim();
    document.querySelector("#name").value = userAccountDetails.Name;
    userAccountDetails.Password =  document.querySelector("#pwd").value;
    var rePassword = document.querySelector("#rePwd").value;
    userAccountDetails.Mail = document.querySelector("#mail").value;
    console.log(userAccountDetails);
    document.querySelector(".nameError").style.display = (userAccountDetails.Name == "") ? "block" : "none";
    document.querySelector(".mailError").style.display = ( userAccountDetails.Mail == "") ? "block" : "none";
    document.querySelector(".registrationSucessful").style.display="block";
    if(userAccountDetails.Password != rePassword){
        document.querySelector=("passError").style.display="block";
    }
    else{
        document.querySelector=("passError").style.display="none";
    }
}
 var validateSpace = (event) =>{

            if (event.charCode == 32){
                return false;
            }
            else{
                return true;
            }
 }

 var validateChange = (event) =>{
    document.querySelector("#passRequriements").style.display="block";
 }
 var validatePassSpace = (event) =>{
    if (event.charCode == 32){
        return false;
    }
    else{
        return true;
    }
}
var validationCount = 0;  
var validatePass = (event) =>{
   var password = event.target.value
            if((password.length)==8){
                document.querySelector(".pwdLength").style.color="green"; 
            }
            else{
                document.querySelector(".pwdLength").style.color="red"; 
            }


 
                if (password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) {
                            document.querySelector(".pwdUppercase").style.color = "green";
                } else {
                            document.querySelector(".pwdUppercase").style.color = "red";
                }

   
                if(event.key === "#" || event.key === "@" || event.key === "&" || event.key === "*" ){
                            validationCount++;
                }


                if (validationCount == 1){
                            document.querySelector(".pwdChar").style.color="green";
                }
                else{
                            document.querySelector(".pwdChar").style.color="red";
                }

                
                if(password.includes(" ")){
                    document.querySelector(".pwdSpace").style.color="red";
                    }
                    else{
                        document.querySelector(".pwdSpace").style.color="green";
                    }
                    var numCount = 0;
                    for( var i = 0 ; i< password.length;i++){
                        var charCode = password.charCodeAt(i);
                        if(charCode >= 48 && charCode <= 57){
                            numCount++;
                            break;
                        }
                      }


                      

                      if (numCount == 1){
                        document.querySelector(".pwdNum").style.color="green";
                        }
                        else{
                           document.querySelector(".pwdNum").style.color="red";
                       }

                       console.log(numCount);    
                       console.log(validationCount);
                    
}

  

var showPass = (event) => {
                if (event.target.checked) {
                            document.querySelector("#pwd").type = "text";
                } else {
                            document.querySelector("#pwd").type = "password";
                }
}



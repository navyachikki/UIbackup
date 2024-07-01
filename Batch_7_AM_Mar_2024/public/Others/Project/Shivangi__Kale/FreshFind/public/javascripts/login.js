console.log("Enter in JS");
var readUserDetails = () =>
    {
        var userDetails ={};
        userDetails.accId=$("#accountId").val();
        userDetails.accPwd=$("#accountPassword").val();
        console.log(userDetails);
    }

 // Show Password Eye Icon
    var showPassLogin = (event) => 
        {        
            const showPassword =document.querySelector("#passLogin");
            const passwordField =document.querySelector("#accountPassword");
    
            showPassword.addEventListener("click",function()
            {
                if(passwordField.type === "password")
                    {
                        showPassword.className="bi bi-eye-fill";
                        const type=passwordField.getAttribute("type") ==="password" ? "text" : "password";
                        passwordField.setAttribute("type",type);
                    }
                    else{
                         showPassword.className="bi bi-eye-slash-fill";
                         const type=passwordField.getAttribute("type") ==="password" ? "text" : "password";
                         passwordField.setAttribute("type",type); 
    
                    }
            })
        } 
        
    
           
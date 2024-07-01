var showPswdSignUp = (event) => 
    {        
        const showPassword =document.querySelector("#pswdSignUp");
        const passwordField =document.querySelector("#signup_accountPassword");

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

    var showPassSignUp = (event) => 
        {        
            const showPassword =document.querySelector("#repassSignUp");
            const passwordField =document.querySelector("#signup_accountPassword_reenter");
    
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
   
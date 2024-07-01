var useraccountdetails = {};

var registerUser = () =>{
     useraccountdetails.accountid = document.querySelector("#userId").value;
     useraccountdetails.accountpassword = document.querySelector("#Password").value;
     useraccountdetails.accountreenterpwd = document.querySelector("#reEnterPassword").value;
     useraccountdetails.accountmail= document.querySelector("#Mail").value;
    }


    //acount validation
 
    if( useraccountdetails == ''){
        document.querySelector(".idError").style.display = 'block';
    }else{
        document.querySelector(".idError").style.display = (useraccountdetails.accountid =='') ? 'block' :'none';



        document.querySelector('msg').style.display = 'block';
    console.log(useraccountdetails);
    }



     var validateSpace = (event) => {
        console.log(event);
        if(event.charcode == 32){
            return false;
        }else{
            return true;
        }
     }

     var showValidationList = (event) =>{
        document.querySelector(".pwdvalidationlist").style.display = 'block';
     }

     var specialSymbolCount = 0;

     var validateUserPwd = (event) =>{
        console.log(event)
        if(event.target.value.length == 8){
        document.querySelector('#lengthvalidation').setAttribute("class", 'valdated');
        }else{
            document.querySelector('#lengthvalidation').removeAttribute("class");
        }

        
     //check for ^@#& symbols

     if (event.keycode == 54 ||  event.keycode == 51 || event.keycode == 50 || event.keycode == 55 ){
        specialSymbolCount ++;
     } 

     console.log(specialSymbolCount )
     if(specialSymbolCount == 1){
        document.querySelector('specialsymbolvalidation').setAttribute= ("class", 'validate');
     }else{
        document.querySelector('specialsymbolvalidation').removeAttribute = ("class");
     }
     }

      var changeTextType = (event) => {
        console.log(event.target.checked);
        if(event.target.checked){
            document.querySelector("event.target.checked").setAttribute = ("type", 'text');
            document.querySelector("event.target.checked").removeAttribute = ("type", 'password');
        }        
   }

 
     
     
     
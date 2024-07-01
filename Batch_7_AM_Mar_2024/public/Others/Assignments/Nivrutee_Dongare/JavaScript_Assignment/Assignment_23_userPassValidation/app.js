var userDetails = {};

var createUser = () => {
   userDetails.userId = document.querySelector("#userid").value;
   userDetails.userId = userDetails.userId.trim();
   document.querySelector("#userid").value = userDetails.userId 
   userDetails.userPass = document.querySelector("#setpass").value;
   var userrePass = document.querySelector("#repass").value;
   userDetails.userMail  = document.querySelector("#umail").value;

   if( userDetails.userId === '') {
    document.querySelector(".idError").style.display = "block";
   }else{
    document.querySelector(".idError").style.display = "none";
   }

   document.querySelector(".msg").style.display = "block";
   console.log(userDetails);
   
}
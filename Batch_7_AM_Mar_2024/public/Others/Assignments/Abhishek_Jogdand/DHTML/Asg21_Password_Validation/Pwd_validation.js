function displayMsg(){
    var btn=document.querySelector("#btn");
    var msg=document.querySelector("#msg");
    msg.setAttribute("style","display:block");
    forname();
    checkPwdRePwd();
    checkMail();

}


function forname(){
    var userId=document.querySelector("#userId").value;
    userId=userId.trim();
    if (userId==''){
        var error1=document.querySelector("#error1").style.display='block';    
    }
    
}



function showPass(event){
    var userPassword=document.querySelector("#userPassword");
    if(event.target.checked){
        userPassword.setAttribute("type","text");
    }
    else{
        userPassword.setAttribute("type","password");
    }
}


function checkPwdRePwd(){
var userPassword=document.querySelector("#userPassword").value;
var reenterPwd=document.querySelector("#reenterPwd").value;
if(userPassword!=reenterPwd){
    var error3=document.querySelector("#error3").style.display='block';
}
}

function checkMail(){
    var mailId=document.querySelector("#mailId").value; 
    // console.log(mailId[0,5]);
    if(mailId.slice(-10,mailId.length)!='@gmail.com'){
        var error4=document.querySelector("#error4").style.display='block';
        
    }
     
}

function passwordCheck(){
    var userPassword=document.querySelector("#userPassword").value;
    
    //Rule1-lenght should be 8
    if(userPassword.length==8){
        var rule1=document.querySelector("#rule1");
        rule1.setAttribute("class","validated");
    }
    //rule2-first letter capital.
    
    if(userPassword.charCodeAt(0)>=65 && userPassword.charCodeAt(0)<=90){
        var rule2=document.querySelector("#rule2");
        rule2.setAttribute("class","validated");
    }
    

    //rule4-should have min one numeric
    var num=0;
    var space=0;
    var specialChar=0; 
    for(let i=0;i<userPassword.length;i++){
        if(userPassword.charCodeAt(i)>=48 && userPassword.charCodeAt(i)<=57){
            num++;
        }
        if(space==0){
            var rule5=document.querySelector("#rule5").style.color='green';
            
        }
        if(userPassword.charCodeAt(i)==32 ){
            space++;
            var rule5=document.querySelector("#rule5").style.color='red';
                
        }
          //rule3-Password should have min and max one special symbol ^#@&
        if(userPassword.charCodeAt(i)==94 || userPassword.charCodeAt(i)==35 || userPassword.charCodeAt(i)==64 || userPassword.charCodeAt(i)==38){
            specialChar++;
            if(specialChar==1){
                var rule3=document.querySelector("#rule3").style.color='green';
                
            }
            else{
                var rule3=document.querySelector("#rule3").style.color='red'; 
            }
        }
       
       
    }
 
    if(num==1){
        var rule4=document.querySelector("#rule4");
        rule4.setAttribute("class","validated");
    }

}
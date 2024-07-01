let com ='';
function show(){
    document.getElementById('cap').innerHTML ="qqwer";
    let character= "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";
    let com = "";
    for(let i=0; i<6;i++){
        let store =character.charAt(Math.floor(Math.random()*character.length));
        com +=store;
        //console.log(store)  
    }
    document.getElementById('cap').innerHTML=com;
}

function refresh(){
    show();
}

function submit(){
    let id= document.getElementById("uname").value;
    let password= document.getElementById("passInput").value;
    let captchacode=document.getElementById("captchacode").value;
    if(id==="abcd" && password==="1234"){
        if(com===captchacode){
            alert("captcha Successful");
        }
    }
}
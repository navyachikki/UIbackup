

var generate = () => {
     captcha = "";
    var arr = ["N","U","L","S"];
            for(var i = 0; i < 5 ; i++){
                    var seq = Math.floor(Math.random()*arr.length);
                        if(arr[seq]=="L"){
                            captcha+= lowerCase()
                        }
                        else if(arr[seq]=="U"){
                            captcha+= upperCase()
                        } 

                        else if(arr[seq]=="S"){
                            captcha+= symbol()
                        } 
                        else if (arr[seq]=="N"){
                            captcha+= number()
                        } 
            }
            
   
    document.querySelector("#space").innerHTML=captcha;
}

var upperCase =()=>{
    var min = 65;
    var max = 90;
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 25) + 65); // Generates a random uppercase letter
    return randomChar;
}
var lowerCase =()=>{
    var min = 65;
    var max = 90;
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 25) + 97); // Generates a random uppercase letter
    return randomChar;
}
var number =()=>{
    var min = 65;
    var max = 90;
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 9) + 48); // Generates a random uppercase letter
    return randomChar;
}
var symbol =()=>{
    var min = 65;
    var max = 90;
    var randomChar = String.fromCharCode(Math.floor(Math.random() * 9) + 33); // Generates a random uppercase letter
    return randomChar;
}
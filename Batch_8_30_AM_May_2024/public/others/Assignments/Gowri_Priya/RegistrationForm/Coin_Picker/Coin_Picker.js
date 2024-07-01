// for (let i = 1; i <= 90; i++) {

//     var d=document.createElement('div');
//     d.setAttribute('class','circle');
//     d.innerHTML = i;

//     document.querySelector('.container').append(d);
// }
var arr=[];

var startTheGame = () => {

    reset();
    if(arr.length == 0){
        for (let i = 1; i <= 90; i++) {

            var div=document.createElement('div');
            div.setAttribute('class','circle');
            div.innerHTML = i;
            div.style.backgroundColor='white';
        
            document.querySelector('.container').append(div);
            
    
            arr.push(div);
    
        }
    }
    
}
var reset = () => {
    for (var ele in arr){
        arr[ele].style.backgroundColor='pink';
    }
    // document.querySelector('.container').innerHTML='';
    //arr = [];
    document.querySelector('.box').innerHTML='';
}
var done=[];
var nextTheGame = () =>{
    var random = Math.floor(Math.random()*91);

    while(true){
        if(done.indexOf(random) == -1){
            var divEle = arr[random-1];
            divEle.style.backgroundColor='Yellow';
            document.querySelector('.box').innerHTML=random;
            done.push(random);
            break;
            
            // for(var i = 0;i < arr.length;i++){
            //     if((num+1) == arr[i].innerHTML){
            //         div.style.backgroundColor='Yellow';
            //         done.push(num);
            //     }
            // }
        }
        else {
            random = Math.floor(Math.random()*91);
        }
    }

    
    
        
}
// nextTheGame();

// var div=document.createElement('div');
// div.setAttribute('class','box');
// div.innerHTML = i;

// document.querySelector('.circle').append(div);

startTheGame();



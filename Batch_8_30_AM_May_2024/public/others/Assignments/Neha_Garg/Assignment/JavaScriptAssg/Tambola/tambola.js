var coinGenerator=()=>{
    var count=0;
    for(var i=1;i<=90;i++){
        count++;
    var divTag=document.createElement("div");
    divTag.setAttribute("class","block");
    divTag.innerText=i;
    document.querySelector(".container").append(divTag);
    // if(count==10){
    //     document.querySelector(".container").innerHTML("<br>");
    // }

}
}
coinGenerator();
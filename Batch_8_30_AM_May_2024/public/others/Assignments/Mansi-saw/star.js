 
  var readStarBlock = (container)   =>{
    
 var rating = 3
 var fullStar = parseInt(rating);
 var halfStar = 0;
 if( rating %1 ==0) {
    halfStar=1;
 };
 var disableStar = 5- (fullStar+halfStar);
 
 var  divContainer = document.createElement("divContainer");
 divContainer.setAttribute("class","starContainer")

 for(i=1 ;i<=fullStar ; i++){
    var divTag = document.createElement("div")
    divTag.setAttribute("class","fullStar");
    divContainer.append(divTag)
 }

 if(halfStar=1){
    var divTag = document.createElement("div")
    divTag.setAttribute("class","halfStar");
    divContainer.append(divTag)
 }

 for(i=1 ;i<=disableStar ; i++){
    var divTag = document.createElement("div")
    divTag.setAttribute("class","disableStar");
    divContainer.append(divTag)
 }
 console.log(divContainer)
 document.querySelector("#container").append(divContainer)
  }
  readStarBlock(container)
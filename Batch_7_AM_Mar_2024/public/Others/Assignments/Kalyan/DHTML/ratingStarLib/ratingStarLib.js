
var showStars =(reference,stars) =>{
    var mainContainer = document.createElement("div");
    mainContainer.setAttribute("class","ratingContainer");
    var fullStarCount = parseInt(stars);
    var halfStarCount = (stars % 1 == 0) ? 0 : 1;
    var disableStarCount = 5 - (fullStarCount+halfStarCount);
    for(i = 0 ; i < fullStarCount ; i++){
        var fullStar = document.createElement("div");
        fullStar.setAttribute("class","fullStar");
        mainContainer.append(fullStar);
    }
    if(halfStarCount){
        var halfStar = document.createElement("div");
        halfStar.setAttribute("class","halfStar");
        mainContainer.append(halfStar);
    }
    for(i = 0 ; i < disableStarCount ; i++){
        var disableStar = document.createElement("div");
        disableStar.setAttribute("class","disableStar");
        mainContainer.append(disableStar);
    }
    document.querySelector("#rating_1").append(mainContainer);
}

var loadStarRatings = (containerref, rating) => {
    var fullStarCount = parseInt(rating);
    var halfStarCount = (rating % 1 == 0) ? 0 : 1;
    var disbaleStarCount = 5 - (fullStarCount + halfStarCount);
    var maindiv = document.createElement("div");
    maindiv.setAttribute("class","ratingBlock");
   for (var i = 0; i < fullStarCount; i++) {
        var fullStar = document.createElement("div");
        fullStar.setAttribute("id","fullStar");
        maindiv.append(fullStar);
   }
   if (halfStarCount) {
        var halfStar = document.createElement("div")
        halfStar.setAttribute("id","halfStar");
        maindiv.append(halfStar);
   }
   for (var i = 0; i < disbaleStarCount; i++) {
    var disableStar = document.createElement("div");
        disableStar.setAttribute("id","disabledStar");
        maindiv.append(disableStar);
   }

   document.querySelector(containerref).append(maindiv);
}
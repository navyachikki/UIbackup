var renderStarRatingBlock = (containerRef, rating) => {
    var fullStarCount = parseInt(rating);
    var halfStarCount = (rating % 1 === 0) ? 0 : 1;
    var disableStarCount = 5 - (fullStarCount + halfStarCount);

    var divContainer = document.createElement("div");
    divContainer.setAttribute("class", "starContainer");

    for (var i = 0; i < fullStarCount; i++) {
        var divTag = document.createElement("div");
        divTag.setAttribute("class", "fullStar");
        divContainer.appendChild(divTag);
    }
    if (halfStarCount === 1) {
        var divTag = document.createElement("div");
        divTag.setAttribute("class", "halfStar");
        divContainer.appendChild(divTag);
    }
    for (var i = 0; i < disableStarCount; i++) {
        var divTag = document.createElement("div");
        divTag.setAttribute("class", "disableStar");
        divContainer.appendChild(divTag);
    }

    document.querySelector(containerRef).appendChild(divContainer);
}

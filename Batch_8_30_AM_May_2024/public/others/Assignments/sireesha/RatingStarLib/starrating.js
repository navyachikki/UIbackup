var renderStarRatingBlock = (containerRef, rating) => {

    var fullStarCount = parseInt(rating);
    var halfStarCount = (rating % 1 == 0) ? 0 : 1;
    var disableStarCount = 5 - (fullStarCount + halfStarCount);

    var divContainer = document.createElement("div");
    divContainer.setAttribute("class", "starContainer");
    for (var i = 1; i <= fullStarCount; i++) {
        var divTag = document.createElement("div");
        divTag.setAttribute("class", "fullStar");
        divContainer.append(divTag);
    }

    if (halfStarCount == 1) {
        var divTag = document.createElement("div");
        divTag.setAttribute("class", "halfStar");
        divContainer.append(divTag);
    }

    for (var i = 1; i <= disableStarCount; i++) {
        var divTag = document.createElement("div");
        divTag.setAttribute("class", "disableStar");
        divContainer.append(divTag);
    }

    document.querySelector(containerRef).append(divContainer)
}

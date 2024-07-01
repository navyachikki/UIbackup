var renderStarRatingBlock = (containerRef, rating) => {
    
    var fullStarCount = parseInt(rating);
    var halfStarCount =  (rating % 1 == 0) ? 0 : 1;
    var disableStarCount = 5 - (fullStarCount + halfStarCount);

    var divContainer = $("<div/>").addClass("starContainer");
    for (var i = 1; i <= fullStarCount; i++) {
        var divTag = $("<div/>").addClass("fullStar");
        divContainer.append(divTag);
    }
    if (halfStarCount == 1) {
        var divTag = $("<div/>").addClass("halfStar");
        divContainer.append(divTag);
    }
    for (var i = 1; i <= disableStarCount; i++) {
        var divTag = $("<div/>").addClass("disableStar");
        divContainer.append(divTag);
    }
    //document.querySelector(containerRef).append(divContainer);
    $(containerRef).append(divContainer);
}
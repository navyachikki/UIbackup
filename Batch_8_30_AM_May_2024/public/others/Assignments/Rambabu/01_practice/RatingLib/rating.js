var renderStarRating = (containerRef, rating) => {
  var fullstarCount = parseInt(rating);
  var halfstarCount = rating % 1 == 0 ? 0 : 1;
  var disablestarCount = 5 - (fullstarCount + halfstarCount);

  var divContainer = document.createElement("div");
  divContainer.setAttribute("class", "starContainer");

  for (var i = 1; i <= fullstarCount; i++) {
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "fullstar");
    divContainer.append(divTag);
  }
  if (halfstarCount == 1) {
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "halfstar");
    divContainer.append(divTag);
  }
  for (var i = 1; i <= disablestarCount; i++) {
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "disablestar");
    divContainer.append(divTag);
  }

  document.querySelector(containerRef).append(divContainer);
};
// renderStarRating("#container", 2.5);

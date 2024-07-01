// var loadGametDetails = () => {
//   var mainDiv = document.createAttribute("div");
//   var divTag = document.createAttribute("div");
//   divTag.setAttribue("class", "board");
//   mainDiv.append(divTag);
//   document.querySelector(".gameBord").append(mainDiv);
// };
// for (var i = 0; i < 90; i++) {
//   loadGametDetails(i);
// }

var loadGametDetails = (number) => {
  var mainDiv = document.createElement("div");
  mainDiv.setAttribute("class", "board");
  var pTag = document.createElement("p");
  pTag.setAttribute("class", "boxText");
  pTag.innerText = number;
  mainDiv.append(pTag);
  document.querySelector(".gameBord").append(mainDiv);
};
for (var i = 1; i <= 90; i++) {
  loadGametDetails(i);
}

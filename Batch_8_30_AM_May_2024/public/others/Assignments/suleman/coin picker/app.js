for (i = 1; i <= 90; i++) {
  var block = document.createElement("div")
  block.setAttribute("class", "block")
  block.textContent = i
  document.querySelector(".container").append(block)
}

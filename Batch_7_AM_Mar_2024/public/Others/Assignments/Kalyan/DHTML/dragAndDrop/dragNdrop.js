var ondropProducts = (event) => {
    event.preventDefault();
    var containerType = event.target.getAttribute("containerType");
    var productId = event.dataTransfer.getData("text");
    var imgTag = document.querySelector("#" + productId);
    var productType =imgTag.getAttribute("type");
    console.log(productType);

    if (containerType==productType) {
        event.target.appendChild(imgTag);
    }
};

var onproductdrag = (event) => {
    event.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
    var imgList = document.querySelectorAll("img");
    imgList.forEach((item, index) => {
        item.setAttribute("id", "product_" + index);
        item.setAttribute("draggable", "true");
        item.addEventListener("dragstart", (event) => {
            console.log("namesty");
            var productId = event.target.getAttribute("id");
            event.dataTransfer.setData("text", productId);
            console.log(productId);
        });
    });
});

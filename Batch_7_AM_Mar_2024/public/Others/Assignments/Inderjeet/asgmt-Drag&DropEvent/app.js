
var imgID = "";
var imgType = "";
document.addEventListener("DOMContentLoaded", ()=> {
    var imgList = document.querySelectorAll("img");
    imgList.forEach((item,index)=> {
        item.setAttribute("id","product-"+ index);
        item.addEventListener("dragstart", (event) => {
            console.log("Drag is Started...");
         imgID = event.target.getAttribute("id");
        imgID = "#" + imgID;
        imgType = event.target.getAttribute("type")
        console.log("ImgType is "+imgType);
        // console.log(imgID);
        });
    });
})



var dragIsover = (event) => {
    event.preventDefault();
    console.log('drag over');
}

var elementDroped = (event) => {
    console.log('element droped');
    // Here I am targetting the element Whose id is (imgId or #id)
    event.preventDefault();
        var image = document.querySelector(imgID);
        var imgSrc = image.getAttribute("src");
        var newImg = document.createElement("img");
        newImg.setAttribute("src", imgSrc);
        var divTag = document.createElement("div");
        divTag.setAttribute("class","mydiv");
        divTag.append(newImg);
        var span = document.createElement("span");
        span.style.cursor = "pointer";
        span.addEventListener("click", (event) => {
            var parent = event.target.parentElement;
            parent.remove();
        })
        span.innerHTML = "X";
        divTag.append(span);
        var cntType = event.target.getAttribute("containerType");
        console.log(cntType);  
        if(imgType == cntType){
            event.target.append(divTag);
        }
        else {
            event.target.remove(divTag);
        }
}
var imgId='';
var elementDragStarted=(event)=>{
    imgId=event.target.getAttribute("id");
    imgId='#'+imgId;
}

var elementGotDropped=(event)=>{
    event.preventDefault();
    var imageTag = document.querySelector(imgId);
    var containerType=event.target.getAttribute("containerType");
    var imgType=imageTag.getAttribute("type");
    if(containerType==imgType){
        event.target.append(imageTag);
    }
}


var elementDragOver=(event)=>{
    event.preventDefault();
}


var addProductToContainer= (event) =>
    {
        console.log("drop happened");
    var imgTag = document.querySelector(productId);
    var containerType =event.target.getAttribute("containerType");
    console.log("containerType:" + containerType);

    var imageCategoryType = imgTag.getAttribute("type");
    console.log("imageCategoryType:" + imageCategoryType);
    if (containerType == imageCategoryType)
        {
        event.target.append(imgTag);
        }
     

    }

var elementDragOver = (event)=>
    {
        event.preventDefault();
 
    }

    var productId=' ' ;

   document.addEventListener("DOMContentLoaded",()=>{

       var imageElementList = document.querySelectorAll('img');

       imageElementList.forEach((item,index) => {

            item.setAttribute("id","product_"+ index ) ;
           item.addEventListener("dragstart", (event) => {
               console.log("drag started");
               productId=event.target.getAttribute("id");
               productId= '#' + productId;
               console.log(productId);

           });
       });

   })
var productDetails ={
     name : "laptop",
     brand : "hp",
     Ram  :  8,
     price:45000,
     rating:3.5,
     img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjmxApfVppR39ckWGzEWA3mXJFagoiFnZ7w&usqp=CAU"
}


var rating = (data,index) => {
    var mainUlTag = document.querySelector("#productDetailsul"); 
    var liTag1 = document.createElement("li");
    liTag1.innerHTML="Name :" + data.name;
    mainUlTag.append(liTag1);


    var liTag2 = document.createElement("li");
    liTag2.innerHTML="brand :" + data.brand;
    mainUlTag.append(liTag2);


    var liTag3 = document.createElement("li");
    liTag3.innerHTML="ram :" + data.Ram
    mainUlTag.append(liTag3);


    var liTag4 = document.createElement("li");
    liTag4.innerHTML="price  :" ;
    mainUlTag.append(liTag4)

    
    var span1 = document.createElement("span");
    span1.setAttribute("class" ,"actualprice")
    span1.innerHTML="50000   ";
    span1.style.textDecorationLine="line-through " ;
    liTag4.append(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class" ,"discountprice")
    span2.innerHTML=data.price;
    liTag4.append(span2);

    
    var liTag5 = document.createElement("li");
    liTag5.setAttribute("id","rating_"+index)
    liTag5.innerHTML="Rating  :" ;
    mainUlTag.append(liTag5);
    

    var liTag6 = document.createElement("li");
    mainUlTag.append(liTag6);

    var lap_img = document.createElement("img")
    lap_img.setAttribute("src",data.img)
    liTag6.append(lap_img);

    showStars("#rating",data.rating);
   
}


document.addEventListener("DOMContentLoaded" , ()=>{
    rating(productDetails,1);
})
console.log(productDetails)


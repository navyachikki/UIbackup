var productData = [
    {
        name: 'Laptop',
        price: 4600,
        discountPercent: 12,
        manu: 'Dell',
        rating: 2.5,
        imgUrl: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg'
    },
    {
        name: 'Pendrive',
        price: 200,
        discountPercent: 5,
        manu: 'Scandisk',
        rating: 3.5,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXlsEJws7HUUg6jMRu-tNDk3cnFt-E_cMXPzsOYyjxA&s'
    },
    {
        name: 'Laptop',
        price: 2000,
        discountPercent: 20,
        manu: 'Dell',
        rating: 4.5,
        imgUrl: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg'
    },
    {
        name: 'Mobile',
        price: 32000,
        discountPercent: 13,
        manu: 'Samsung',
        rating: 4.5,
        imgUrl: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1711104354021/f91329d65e0c0558e4b1964cc5d080dd.jpg'
    }
];

var loadProductDetails = (data, index) => {
   /* var mainLiTag = document.createElement("li"); -> $("<li/>");
    mainLiTag.setAttribute("class", "test"); -> mainLiTag.addClass("test")
    mainLiTag.setAttribute("id", "sample"); -> mainLiTag.attr("id", "sample");
    mainLiTag.style.color = 'green'; -> 
    mainLiTag.innerHTML = "Hello every one"; 

    document.querySelector(".productDetailsContainer").append(mainLiTag);
    */

    //var mainLiTag = $("<li/>").addClass("test").attr("id", "sample").css("color", "green").html("Hello every one");   

    var mainLiTag = $("<li/>");
    var ulTag = $('<ul class="singleProduct"/>');
    
    var li1 = $("<li/>").text("Product Name: " + data.name);
    ulTag.append(li1);
    var li2 = $("<li/>").text("Price :");
    var span1 = $("<span class='actualPrice'/>").text(data.price);
    var discountedPrice = data.price - (data.price * data.discountPercent) / 100;
    var span2 = $("<span class='discountedPrice'/>").text(discountedPrice);
    li2.append(span1)
    li2.append(span2);
    ulTag.append(li2);

    var li3 = $("<li />").text("Manufacturer : " + data.manu);
    ulTag.append(li3);
    var id = "rating_block_" + index;
    var li4 = $("<li id='" + id + "' />").text("Rating:");
    ulTag.append(li4);

    var li5 = $("<li/>");
    var imgTag = $("<img />").attr("src", data.imgUrl);
    li5.append(imgTag);
    ulTag.append(li5);


    mainLiTag.append(ulTag);
    console.log(mainLiTag);
    $(".productDetailsContainer").append(mainLiTag);

    loadStarRatings('#' + id, data.rating);

}

document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0 ; i < productData.length; i++) {
        loadProductDetails(productData[i], i);
    }
})

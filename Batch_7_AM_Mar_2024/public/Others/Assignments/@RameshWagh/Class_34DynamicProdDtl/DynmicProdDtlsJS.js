var productData = [
    {
        name: 'Laptop',
        price: 80000,
        discountPercent: 12,
        manu: 'Dell',
        rating: 3.5,
        imgUrl: 'https://images.indianexpress.com/2023/05/dell-g15-5530-review.jpg?w=640'
    },
    {
        name: 'Pendrive',
        price: 200,
        discountPercent: 5,
        manu: 'Sony',
        rating: 1.5,
        imgUrl: 'https://m.media-amazon.com/images/I/810qQEGcq7L._SX679_.jpg'
    },
    {
        name: 'Laptop',
        price: 15000,
        discountPercent: 20,
        manu: 'Lenovo',
        rating: 3.5,
        imgUrl: 'https://www.jbhifi.com.au/cdn/shop/products/609866-Product-0-I-638163819204128006_ba2bad62-2470-4320-82a2-931b5d14977b.jpg?v=1708044165'
    },
    {
        name: 'Mobile',
        price: 172000,
        discountPercent: 13,
        manu: 'Samsung',
        rating: 5,
        imgUrl: 'https://www.cnet.com/a/img/resize/ddaec5a2cf98bc10541c01649682f050d90b3a5d/hub/2022/08/09/20e7a538-a33c-41d2-bb75-e2609c0baea8/samsung-galaxy-foldable-9804.jpg?auto=webp&fit=crop&height=675&width=1200'
    }
];

var loadProductDetails = (data, index) => {
  
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

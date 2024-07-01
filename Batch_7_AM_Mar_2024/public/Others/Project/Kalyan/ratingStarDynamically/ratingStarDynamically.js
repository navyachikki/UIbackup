var productDetails = [
    {
        name: "laptop",
        brand: "hp",
        Ram: 8,
        price: 45000,
        rating: 4,
        img: "images/laptop.jpeg"
    },
    {
        name: "phone",
        brand: "samsung",
        Ram: 4,
        price: 20000,
        rating: 2,
        img: "images/samsungmobile.jpeg"
    },
    {
        name: "iphone 13",
        brand: "Appple",
        Ram: 4,
        price: 52000,
        rating: 4,
        img: "images/iphone.jpeg"
    },
    {
        name: "Washing Machine",
        brand: "IFB",
        type:"Top load",
        price: 22000,
        rating: 5,
        img: "images/washingMachine.jpeg"
    }
];

var showStars = (reference, stars) => {
    var mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "ratingContainer");
    var fullStarCount = parseInt(stars);
    var halfStarCount = stars % 1 === 0 ? 0 : 1;
    var disableStarCount = 5 - (fullStarCount + halfStarCount);
    
    for (var i = 0; i < fullStarCount; i++) {
        var fullStar = document.createElement("div");
        fullStar.setAttribute("class", "fullStar");
        mainContainer.appendChild(fullStar);
    }
    
    if (halfStarCount) {
        var halfStar = document.createElement("div");
        halfStar.setAttribute("class", "halfStar");
        mainContainer.appendChild(halfStar);
    }
    
    for (var j = 0; j < disableStarCount; j++) {
        var disableStar = document.createElement("div");
        disableStar.setAttribute("class", "disableStar");
        mainContainer.appendChild(disableStar);
    }
    
    document.querySelector(reference).appendChild(mainContainer);
}

var rating = (data, index) => {
    var productList = document.querySelector("#productDetailsul");

    // Create a new ul element for each product
    var mainUlTag = document.createElement("ul");
    mainUlTag.setAttribute("id", "product_" + index);
    productList.appendChild(mainUlTag);

    var liTag1 = document.createElement("li");
    liTag1.innerHTML = "Name: " + data.name;
    mainUlTag.appendChild(liTag1);

    var liTag2 = document.createElement("li");
    liTag2.innerHTML = "Brand: " + data.brand;
    mainUlTag.appendChild(liTag2);

    var liTag3 = document.createElement("li");
    liTag3.innerHTML = "RAM: " + data.Ram;
    mainUlTag.appendChild(liTag3);

    var liTag4 = document.createElement("li");
    liTag4.innerHTML = "Price: ";
    mainUlTag.appendChild(liTag4);

    var span1 = document.createElement("span");
    span1.setAttribute("class", "actualprice");
    span1.innerHTML = "50000 ";
    liTag4.appendChild(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class", "discountprice");
    span2.innerHTML = data.price;
    liTag4.appendChild(span2);

    var liTag5 = document.createElement("li");
    liTag5.setAttribute("id", "rating_" + index);
    liTag5.innerHTML = "Rating: ";
    mainUlTag.appendChild(liTag5);

    var liTag6 = document.createElement("li");
    mainUlTag.appendChild(liTag6);

    var lap_img = document.createElement("img");
    lap_img.setAttribute("src", data.img);
    liTag6.appendChild(lap_img);

    showStars("#rating_" + index, data.rating);
}

document.addEventListener("DOMContentLoaded", () => {
    productDetails.forEach((product, index) => {
        rating(product, index + 1);
    });
});

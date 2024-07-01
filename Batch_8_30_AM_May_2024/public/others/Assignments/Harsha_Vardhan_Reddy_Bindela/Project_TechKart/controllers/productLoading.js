var productDetails = [
    {
        name: 'C++ Programming',
        price: 2600,
        manu: 'TechKart',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png',
        rating: '4/5'
    },
    {
        name: 'JavaScript',
        price: 2000,
        manu: 'Udemy',
        image: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
        rating: '4/5'
    },
    {
        name: 'Python',
        price: 1500,
        manu: 'Scaler',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
        rating: '4/5'
    },
    {
        name: 'Laptop',
        price: 2600,
        manu: 'Sony',
        image: 'https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg',
        rating: '4/5'
    },
    {
        name: 'Laptop',
        price: 2600,
        manu: 'Sony',
        image: 'https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg',
        rating: '4/5'
    }
];

var loadProductDetails = (productDetails,index) => {
    var mainLi = document.createElement("li");
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "pdetails");
    

    var li4 = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute("src", productDetails.image);
    li4.append(img);
    ulTag.append(li4);

    var li1 = document.createElement("li");
    li1.innerText = 'Product Name: ' + productDetails.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Price: ' + productDetails.price;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = 'Manufacturer: ' + productDetails.manu;
    ulTag.append(li3);

    var li5 = document.createElement("li");
    // li5.innerText = 'Rating: ';
    li5.setAttribute("id", "product_" + index);
    ulTag.append(li5);

    var li6 =document.createElement("button");
    li6.innerText ='Add to Cart';
    ulTag.append(li6);
    

    mainLi.append(ulTag);

    document.querySelector(".mainProductDetails").append(mainLi);
    // var ratingValue = parseFloat(productDetails.rating);
    // console.log("rating value "+ ratingValue);
    // console.log("rating Container "+ ratingContainer);
    renderStarRatingBlock("#product_" + index, parseFloat(productDetails.rating));
}


// for (var i = 0 ; i < productDetails.length; i++) {
//     loadProductDetails(productDetails[i]);
// }

var onLoadPage = () => {
    for (var i = 0 ; i < productDetails.length; i++) {
        loadProductDetails(productDetails[i] , i);
    }
}

window.onload = onLoadPage;
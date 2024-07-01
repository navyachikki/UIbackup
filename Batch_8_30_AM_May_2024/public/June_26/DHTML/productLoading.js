var productDetails = [
    {
        name: 'Laptop',
        price: 2600,
        manu: 'Sony',
        image: 'https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg',
        rating: '4'
    },
    {
        name: 'Mobile',
        price: 14000,
        manu: 'Iphone',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-FN1iY2MjnEBUz8IlJ2wkq-ZntrNTrMeGw&s',
        rating: '3.5'
    },
    {
        name: 'Pendrive',
        price: 10000,
        manu: 'Scandisk',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEeG3Z0-kyZs-476jk9E-YOWrcNc0coq9Vg&s',
        rating: '1'
    },
    {
        name: 'Laptop',
        price: 2600,
        manu: 'Sony',
        image: 'https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg',
        rating: '2.5'
    },
    {
        name: 'Laptop',
        price: 2600,
        manu: 'Sony',
        image: 'https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg',
        rating: '4'
    }
];

// var pdetails = get dta from server through AJAX;
var loadProductDetails = (pDetails, index) => {
    var mainLi = $("<li/>");
    var ulTag = $("<ul/>").addClass("pdetails");
    var li1 = $("<li/>").text('Product Name: ' + pDetails.name);
    ulTag.append(li1);

    var li2 = $("<li/>").text('Price: ' + pDetails.price);
    ulTag.append(li2);

    var li3 = $("<li/>").text('Manufacturer: ' + pDetails.manu);
    ulTag.append(li3);

    var li5 = $("<li/>").attr("id", "product_" + index)
    ulTag.append(li5);

    var li4 = $("<li/>");
    var img = $("<img/>").attr("src", pDetails.image);
    li4.append(img);
    ulTag.append(li4);
    mainLi.append(ulTag);

    $(".mainProductDetails").append(mainLi);

    renderStarRatingBlock("#product_" + index, pDetails.rating);
}

var onLoadPage = () => {
    for (var i = 0 ; i < productDetails.length; i++) {
        loadProductDetails(productDetails[i] , i);
    }
}

//onLoadPage();
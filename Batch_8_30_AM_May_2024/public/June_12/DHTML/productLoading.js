var productDetails = [
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
                },
                {
                    name: 'Laptop',
                    price: 2600,
                    manu: 'Sony',
                    image: 'https://cdn.ttgtmedia.com/rms/onlineimages/hp_elitebook_mobile.jpg',
                    rating: '4/5'
                }
            ];


// var pdetails = get dta from server through AJAX;
var loadProductDetails = (pDetails) => {
    var mainLi = document.createElement("li");
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "pdetails");
    var li1 = document.createElement("li");
    li1.innerText = 'Product Name: ' + pDetails.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Price: ' + pDetails.price;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = 'Manufacturer: ' + pDetails.manu;
    ulTag.append(li3);

    var li5 = document.createElement("li");
    li5.innerText = 'Rating: ' + pDetails.rating;
    ulTag.append(li5);

    var li4 = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute("src", pDetails.image);
    li4.append(img);
    ulTag.append(li4);
    mainLi.append(ulTag);

    document.querySelector(".mainProductDetails").append(mainLi);
}

for (var i = 0 ; i < productDetails.length; i++) {
    loadProductDetails(productDetails[i]);
}

document.querySelector(".header").style.color = "blue";
document.querySelector(".header").style['background-color'] = "yellow";
var productData = [];

var productTemplate;

var loadProductDetails = (data, index) => {
    data.id = 'rating_block_' + index;
    data.discountPrice = data.price - (data.price * data.discountPercent) / 100;
    $(".productDetailsContainer").append(productTemplate(data));

    loadStarRatings("#" + data.id, data.rating);
}

document.addEventListener("DOMContentLoaded", () => {

    productTemplate = Handlebars.compile(document.querySelector("#productTemplate").innerHTML);


    var dataUrl = 'http://localhost:8082/get/productDetails';
    axios.get(dataUrl)
        .then(function (response) {
            // handle success
            console.log(response);
            productData = response.data.pData;
            for (var i = 0 ; i < productData.length; i++) {
                loadProductDetails(productData[i], i);
            }
        }).catch(function (error) {
            // handle error
            console.log(error);
        });

    
})

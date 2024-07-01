var productData = [];

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

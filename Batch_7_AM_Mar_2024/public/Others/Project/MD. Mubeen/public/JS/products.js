// var ProductData = [
//     {
//         name: "ASUS ROG Strix G16",
//         brand: "ASUS",
//         regularPrice: 1250,
//         discountpercent: 25,
//         rating: 5,
//         imgUrl: "https://m.media-amazon.com/images/I/613xkWS7b9L._SL1500_.jpg"
//     },
//     {
//         name: "Dell G15",
//         brand: "DELL",
//         regularPrice: 890,
//         discountpercent: 25,
//         rating: 4.5,
//         imgUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/gray/non-touch/4-zone-rgb-kb/notebook-laptop-g15-5530-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4280&hei=3108&qlt=100,1&resMode=sharp2&size=4280,3108&chrss=full&imwidth=5000"
//     },
//     {
//         name: "HONOR MagicBook X16",
//         brand: "HONOR",
//         regularPrice: 780,
//         discountpercent: 25,
//         rating: 3.5,
//         imgUrl: "https://m.media-amazon.com/images/I/61aaFLxqFKL._SX679_.jpg"
//     },
//     {
//         name: "Samsung Galaxy Book3",
//         brand: "SAMSUNG",
//         regularPrice: 940,
//         discountpercent: 25,
//         rating: 4,
//         imgUrl: "https://m.media-amazon.com/images/I/81NFEnJDJ6L._SX679_.jpg"
//     },
// ];

var loadProductDetails = (data, index) => {
    var mainLiTag = $('<li/>');
    var ulTag = $('<ul class="singleProduct"/>');
    var li0 = $('<li/>')
    ulTag.append(li0);
    var anchor = $('<a/>').attr("href", data.image).attr("target", "_blank");
    li0.append(anchor);
    var image = $('<img/>').attr("src", data.image).attr("title", data.title).attr("alt", data.name);
    anchor.append(image)
    var li1 = $('<li/>').text(data.title);
    ulTag.append(li1);
    var li2 = $('<li/>').text("Description: " + data.description).attr("id" , "desc").attr("title", data.description);
    ulTag.append(li2);
    var li3 = $('<li/>').text("Regular Price: ");
    ulTag.append(li3);
    var span1 = $('<span id="regPrice"/>').text("$" + data.price)
    li3.append(span1);
    // var li4 = $('<li/>').text("Discounted Price: ");
    // ulTag.append(li4);
    // var span2 = $('<span id="discPrice"/>').text("$" + [data.regularPrice - (data.regularPrice * data.discountpercent) / 100]);
    // li4.append(span2);
    var id = "rating_block_" + index;
    var li5 = $("<li id='" + id + "'/>").text("Rating: ");
    ulTag.append(li5);
    mainLiTag.append(ulTag);
    $(".ProductDetailsContainer").append(mainLiTag);
    loadStarRatings('#' + id, data.rating.rate);
}
document.addEventListener("DOMContentLoaded", () => {
    var productDetailsurl = "https://fakestoreapi.com/products";

            // axios.get(productDetailsurl)
            // .then(function (response) {
            //     // handle success
            //     console.log(response);
            //     ProductData = response.data.pdata;
            //     for (var i = 0; i < ProductData.length; i++) {
            //         loadProductDetails(ProductData[i], i);
            //     }
            // })
            // .catch(function (error) {
            //     // handle error
            //     console.log(error);
            // });








            
            axios.get(productDetailsurl)
            .then(function (response) {
                // handle success
                console.log(response);
                ProductData = response.data;
                for (var i = 0; i < ProductData.length; i++) {
                    loadProductDetails(ProductData[i], i);
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
})
var singeProductTempalte;

axios.get("templates/singleProductTemplate.htm").then((responseTemplate) => {
    singeProductTempalte = Handlebars.compile(responseTemplate.data);
}).catch((err) => {
        
});
var getProductDetails = () => {
    
    var productDetails = [];

    axios.get('/load/productDetails').then((response) => {
        productDetails = response.data.pdata;
        productDetails.forEach((product, index) => {
            product.description = product.description.substr(0, 100) + '...';
            product.discountedPrice = product.price - (product.price * product.discountPercent) / 100;
            $("#productDetailsBlock").append(singeProductTempalte(product));
            var id = `#product_${product.id}`;
            loadStarRatings(id, product.rating);
        })
    });

}



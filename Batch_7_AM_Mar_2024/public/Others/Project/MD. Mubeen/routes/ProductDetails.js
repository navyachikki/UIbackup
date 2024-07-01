var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var productDetails = {
    pdata : [
      {
          name: "ASUS ROG Strix G16",
          brand: "ASUS",
          regularPrice: 1250,
          discountpercent: 25,
          rating: 5,
          imgUrl: "https://m.media-amazon.com/images/I/613xkWS7b9L._SL1500_.jpg"
      },
      {
          name: "Dell G15",
          brand: "DELL",
          regularPrice: 890,
          discountpercent: 25,
          rating: 4.5,
          imgUrl: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g15-5530/media-gallery/gray/non-touch/4-zone-rgb-kb/notebook-laptop-g15-5530-gray-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4280&hei=3108&qlt=100,1&resMode=sharp2&size=4280,3108&chrss=full&imwidth=5000"
      },
      {
          name: "HONOR MagicBook X16",
          brand: "HONOR",
          regularPrice: 780,
          discountpercent: 25,
          rating: 3.5,
          imgUrl: "https://m.media-amazon.com/images/I/61aaFLxqFKL._SX679_.jpg"
      },
      {
          name: "Samsung Galaxy Book3",
          brand: "SAMSUNG",
          regularPrice: 940,
          discountpercent: 25,
          rating: 4,
          imgUrl: "https://m.media-amazon.com/images/I/81NFEnJDJ6L._SX679_.jpg"
      },
    ]    
  };
  res.send(JSON.stringify(productDetails));
});

module.exports = router;

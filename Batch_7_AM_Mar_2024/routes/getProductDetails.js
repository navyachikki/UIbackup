var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var productData = {
    pData: [
      {
          name: 'Laptop',
          price: 4600,
          discountPercent: 12,
          manu: 'Dell',
          rating: 2.5,
          imgUrl: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg'
      },
      {
          name: 'Pendrive',
          price: 200,
          discountPercent: 5,
          manu: 'Scandisk',
          rating: 3.5,
          imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDXlsEJws7HUUg6jMRu-tNDk3cnFt-E_cMXPzsOYyjxA&s'
      },
      {
          name: 'Laptop',
          price: 2000,
          discountPercent: 20,
          manu: 'Dell',
          rating: 4.5,
          imgUrl: 'https://m.media-amazon.com/images/I/61Qe0euJJZL.jpg'
      },
      {
          name: 'Mobile',
          price: 32000,
          discountPercent: 13,
          manu: 'Samsung',
          rating: 4.5,
          imgUrl: 'https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1711104354021/f91329d65e0c0558e4b1964cc5d080dd.jpg'
      }
  ]
  };

  res.send(JSON.stringify(productData));
});

module.exports = router;

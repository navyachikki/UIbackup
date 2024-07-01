var studentDetails = [
  {
    name: "Laptop",
    Price: 26000,
    manufracture: "Dell",
    rating: "4",
    image: "../../00_assets/images/laptop.webp",
  },
  {
    name: "Mobile",
    Price: 22000,
    manufracture: "Dell",
    rating: "4.5",
    image:
      "https://media.wired.com/photos/65bd689b6430bf70b2a79a6e/1:1/w_1571,h_1571,c_limit/Google%20Pixel%208%20and%20Pixel%208%20Pro%20SOURCE%20Julian%20Chokkattu.jpg",
  },
  {
    name: "Desktop",
    Price: 126000,
    manufracture: "Apple",
    rating: "5",
    image:
      "https://images-cdn.ubuy.co.in/65219adae007a2488f57cd38-restored-apple-imac-21-5-thin-desktop.jpg",
  },
  {
    name: "Mobile",
    Price: 6000,
    manufracture: "Oppo",
    rating: "1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYVaDPWSqW2regY1skZm0_KWKw6YoS-t2mA&s",
  },
  {
    name: "Sound Box",
    Price: 100000,
    manufracture: "Bose",
    rating: "3",
    image:
      "https://5.imimg.com/data5/CB/DM/MY-15033811/bose-home-theater-system.jpg",
  },
  {
    name: "TV",
    Price: 26000,
    manufracture: "MI",
    rating: "2.5",
    image:
      "https://m.media-amazon.com/images/I/71hBm3psB2L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "Ipad",
    Price: 34000,
    manufracture: "Apple",
    rating: "5",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKJjVd9qAPRdnj_C-RBPYOUQViSOtAKwsLg&s",
  },
];
var productDetails = (pDetails, index) => {
  var mainLi = document.createElement("li");
  var ulTag = document.createElement("ul");
  ulTag.setAttribute("class", "pdetails");
  var li1 = document.createElement("li");
  li1.innerText = "Product Name: " + pDetails.name;
  ulTag.append(li1);

  var li2 = document.createElement("li");
  li2.innerText = "Price: " + pDetails.Price;
  ulTag.append(li2);

  var li3 = document.createElement("li");
  li3.innerText = "Manufacturer: " + pDetails.manufracture;
  ulTag.append(li3);

  var li5 = document.createElement("li");
  li5.setAttribute("id", "product_" + index);
  ulTag.append(li5);

  var li4 = document.createElement("li");
  var img = document.createElement("img");
  img.setAttribute("src", pDetails.image);
  li4.append(img);
  ulTag.append(li4);
  mainLi.append(ulTag);

  document.querySelector(".mainProductDetails").append(mainLi);
  renderStarRating("#product_" + index, pDetails.rating);
};
for (var i = 0; i < studentDetails.length; i++) {
  productDetails(studentDetails[i], i);
}

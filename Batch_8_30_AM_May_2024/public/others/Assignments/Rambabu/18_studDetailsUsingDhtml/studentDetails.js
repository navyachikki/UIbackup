var sDetails = [
  {
    name: "Raj",
    age: 32,
    gander: "Male",
    location: "Hyderabad",
    image: "../00_assets/images/student.png",
  },
  {
    name: "Raj",
    age: 32,
    gander: "Male",
    location: "Hyderabad",
    image: "../00_assets/images/student.png",
  },
  {
    name: "Raj",
    age: 32,
    gander: "Male",
    location: "Hyderabad",
    image: "../00_assets/images/student.png",
  },
  {
    name: "Raj",
    age: 32,
    gander: "Male",
    location: "Hyderabad",
    image: "../00_assets/images/student.png",
  },
  {
    name: "Raj",
    age: 32,
    gander: "Male",
    location: "Hyderabad",
    image: "../00_assets/images/student.png",
  },
  {
    name: "Raj",
    age: 32,
    gander: "Male",
    location: "Hyderabad",
    image: "../00_assets/images/student.png",
  },
  {
    name: "Raj",
    age: 32,
    gander: "Male",
    location: "Hyderabad",
    image: "../00_assets/images/student.png",
  },
];
var loadStudentDetails = (sDetails) => {
  var mainLi = document.createElement("li");
  var ulTag = document.createElement("ul");
  ulTag.setAttribute("class", "studentDetails");
  var li1 = document.createElement("li");
  li1.innerText = "Name: " + sDetails.name;
  ulTag.append(li1);
  var li2 = document.createElement("li");
  li2.innerText = "Age: " + sDetails.age;
  ulTag.append(li2);
  var li3 = document.createElement("li");
  li3.innerText = "Gender: " + sDetails.gander;
  ulTag.append(li3);
  var li4 = document.createElement("li");
  li4.innerText = "Location: " + sDetails.location;
  ulTag.append(li4);
  var li5 = document.createElement("li");
  var img = document.createElement("img");
  img.setAttribute("src", sDetails.image);
  li5.append(img);
  ulTag.append(li5);

  mainLi.append(ulTag);

  document.querySelector(".mainStudentDetails").append(mainLi);
};
for (var i = 0; i < sDetails.length; i++) {
  loadStudentDetails(sDetails[i]);
}

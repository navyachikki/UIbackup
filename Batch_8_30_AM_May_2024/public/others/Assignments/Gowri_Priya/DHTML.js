var EmployeeDetails=[
    {
        name: 'Lilly',
        age: 21,
        gender: "Female",
        location: "Hyderabad",
        img: "images/bitmoji1.jpg"
    },
    {
        name: "Racheal",
        age: 22,
        gender: "Female",
        location: "Chennai",
        img: "images/bitmoji2.jpg"
    },
    {
        name: "Tate",
        age: 20,
        gender: "Female",
        location: "Bangalore",
        img: "images/bitmoji3.jpg"
    },
    
    {
        name: "Max",
        age: 25,
        gender: "Female",
        location: "OOty",
        img: "images/bitmoji4.jpg"
    },
    {
        name: "Allysa",
        age: 24,
        gender: "Female",
        location: "Pune",
        img: "images/bitmoji5.jpg"
    },
    {
        name: "Eleven",
        age: 24,
        gender: "Female",
        location: "Delhi",
        img: "images/bitmoji6.jpg"
    },
    {
        name: "Lucy",
        age: 26,
        gender: "Female",
        location: "Hyderabad",
        img: "images/bitmoji7.jpg"
    },
    {
        name: "Atlas",
        age: 28,
        gender: "Male",
        location: "USA",
        img: "images/bitmoji8.jpg"
    },
    {
        name: "Katie",
        age: 29,
        gender: "Female",
        location: "OOty",
        img: "images/bitmoji9.jpg"
    },
    {
        name: "Jenny",
        age: 20,
        gender: "Female",
        location: "USA",
        img: "images/bitmoji10.jpg"
    }
];
var loadEmployeeDetails = (empDetails) => {
    
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "empdetails");

    var LiTag = document.createElement("li");

    var li1 = document.createElement("li");
    li1.innerText = "EmployeeName:" +" " +empDetails.name;
    ulTag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = "EmployeeAge:" +" " +empDetails.age;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = "EmployeeGender:" +" " +empDetails.gender;
    ulTag.append(li3);

    var li4 = document.createElement("li");
    li4.innerText = "EmployeeLocation:" +" " +empDetails.location;
    ulTag.append(li4);

    var li5 = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute("src", empDetails.img);
    li5.append(img);
    ulTag.append(li5);
    LiTag.append(ulTag);

    document.querySelector(".StudBlocks").append(LiTag);

}

for(var i=0; i<EmployeeDetails.length; i++){
    loadEmployeeDetails(EmployeeDetails[i]);
}




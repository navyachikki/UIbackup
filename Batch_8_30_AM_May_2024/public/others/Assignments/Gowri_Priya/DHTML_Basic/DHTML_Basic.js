var EmployeeDetails=[
    {
        name: 'Lilly',
        age: 21,
        gender: "Female",
        img: "../images/bitmoji1.jpg",
        rating: "1"
    },
    {
        name: "Racheal",
        age: 22,
        gender: "Female",
        img: "../images/bitmoji2.jpg",
        rating: "1.5"
    },
    {
        name: "Tate",
        age: 20,
        gender: "Female",
        img: "../images/bitmoji3.jpg",
        rating: "2"
    },
    
    {
        name: "Max",
        age: 25,
        gender: "Female",
        img: "../images/bitmoji4.jpg",
        rating: "2.5"
    },
    {
        name: "Allysa",
        age: 24,
        gender: "Female",
        img: "../images/bitmoji5.jpg",
        rating: "3"
    },
    {
        name: "Eleven",
        age: 24,
        gender: "Female",
        img: "../images/bitmoji6.jpg",
        rating: "3.5"
    },
    {
        name: "Lucy",
        age: 26,
        gender: "Female",
        img: "../images/bitmoji7.jpg",
        rating: "4"
    },
    {
        name: "Atlas",
        age: 28,
        gender: "Male",
        img: "../images/bitmoji8.jpg",
        rating: "4.5"
    },
    {
        name: "Katie",
        age: 29,
        gender: "Female",
        img: "../images/bitmoji9.jpg",
        rating: "5"
    },
    {
        name: "Jenny",
        age: 20,
        gender: "Female",
        img: "../images/bitmoji10.jpg",
        rating: "3"
    }
];
var loadEmployeeDetails = (empDetails, index) => {
    
    var ulTag = $("<ul/>").addClass("empdetails");
    var LiTag = $("<li/>");

    var li1 = $("<li/>").text("EmployeeName:" +" " +empDetails.name);
    ulTag.append(li1);

    var li2 = $("<li/>").text("EmployeeAge:" +" " +empDetails.age);
    ulTag.append(li2);

    var li3 = $("<li/>").text("EmployeeGender:" +" " +empDetails.gender);
    ulTag.append(li3);

    // var li4 = $("<li/>").text("EmployeeLocation:" +" " +empDetails.location);
    // ulTag.append(li4);

    var li5 = $("<li/>").attr("id", "product_" + index)
    ulTag.append(li5);

    var li4 = $("<li/>");
    var img = $("<img/>").attr("src", empDetails.img);
    li4.append(img);
    ulTag.append(li4);
    LiTag.append(ulTag);

    //document.querySelector(".StudBlocks").append(LiTag);
    $(".StudBlocks").append(LiTag);

    renderStarRatingBlock("#product_" + index, empDetails.rating);


}
var onLoadPage = () =>{
    for(var i=0; i<EmployeeDetails.length; i++){
        loadEmployeeDetails(EmployeeDetails[i], i);
    }

}





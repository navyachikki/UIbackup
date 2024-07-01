var studentDetails = [
    {name: "Raj", age: 20},
    {name: "Teena", age: 10},
    {name: "Raj", age: 20},
    {name: "Teena", age: 10},
    {name: "Raj", age: 20},
    {name: "Teena", age: 10},
    {name: "Raj", age: 20},
    {name: "Teena", age: 10}
];

var renderData = (data) => {
    /*var ulTag = $("<ul/>");
    var li1 = $("<li/>").text("Name : " + data.name);
    ulTag.append(li1)
    var li2 = $("<li/>").text("Age : " + data.age);
    ulTag.append(li2)

    $("#container").append(ulTag) */

    var templateWithData = Mustache.render($("#studentTemplate").html(), data);
    console.log(templateWithData);
   $("#container").append($(templateWithData));
    

}

document.addEventListener("DOMContentLoaded", () => {
    for (var i = 0 ; i < studentDetails.length; i++) {
        renderData(studentDetails[i])
    }
})






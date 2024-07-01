var studentDetails = [
    {
        name: 'Teena',
        class: 'Second',
        age: 10,
        rating: '4',
        image: 'https://shollaschoolcollege.edu.bd/front/img/students/5d5f7b2de45b025.JPG'
    },
    {
        name: 'Krish',
        class: 'Second',
        age: 10,
        rating: '3.5',
        image: 'https://shollaschoolcollege.edu.bd/front/img/students/5cb41981a80151.JPG'
    },
    {
        name: 'Prema',
        class: 'Second',
        age: 10,
        rating: '1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NALAHeYF5XQ9tsOeDoqoPbWHn4mB7lJsiyFnJyHtc3s2dh8oaqSpT_kHJvmceWQxCqw&usqp=CAU'
    },
    {
        name: 'Raj',
        class: 'Second',
        age: 10,
        rating: '2.5',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWY9MZurd2DptbKhTcXUwbg8gJ4NONYVNrCWf_L7pazEMzeDhFpD9ygd-HU-KEd8NSXXo&usqp=CAU'
    },
    {
        name: 'Rohith',
        class: 'Second',
        age: 10,
        rating: '5',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73SOcGzfPX758EGMKvI46XYqsnuF3YU9QUWFzhqZvxUvdZwXqqxm4o3UjhtXwDUmJ0tA&usqp=CAU'
    },
];



var loadStudentDetails = (sDetails,index) => {

    var mainLi = document.createElement("li");
    var ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "pdetails");

    var li1 = document.createElement("li");
    li1.innerText = 'Student Name :' +  sDetails.name;
    ulTag.append(li1);


    var li2 = document.createElement("li");
    li2.innerText = 'Class: ' + sDetails.class;
    ulTag.append(li2);

    var li3 = document.createElement("li");
    li3.innerText = 'Age: ' + sDetails.age;
    ulTag.append(li3);

    var li5 = document.createElement("li");
    li5.setAttribute("id", "product_" + index);
    ulTag.append(li5)

    var li4 = document.createElement("li");
    var img = document.createElement("img");
    img.setAttribute("src", sDetails.image);
    li4.append(img);
    ulTag.append(li4);
    mainLi.append(ulTag);

    document.querySelector(".mainStudentDetails").append(mainLi);
    renderStarRatingBlock("#product_" + index, sDetails.rating);
}
for (i = 0; i < studentDetails.length; i++) {
    loadStudentDetails(studentDetails[i],i);
}
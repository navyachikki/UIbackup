var readStudentData = () => {
    var studentData = {};

    // reading data start
    studentData.name = document.querySelector("#sname").value;
    studentData.age = document.querySelector("#sage").value;
    studentData.gender = document.querySelector("input[name=gender]:checked").value;
    studentData.marks = [];

    for (var i = 1; i <= 5; i++) {
        var id = "#m" + i;
        var value = parseInt(document.querySelector(id).value);
        studentData.marks.push(value);
    }
    //reading data ends

    //processing data starts
    var result = getTotalAndAvg(studentData); // var result = [345, 23.5]
    studentData.total = result[0];
    studentData.avg = result[1];
    studentData.grade = getStudentGrade(studentData.avg);
    console.log(studentData);
    //processing data ENDS


    displayStudentDetails(studentData); //display data to the user 
}

var getTotalAndAvg = (obj) => {
    var total = 0;
    for (var i = 0; i < obj.marks.length; i++) {
        total += obj.marks[i];
    }
    var avg = total / obj.marks.length;
    return [total, avg];
}

var getStudentGrade = (avg) => {
    var grade = (avg >= 40) ? "you passed" : "You have a surprise";
    return grade;
}

var displayStudentDetails = (obj) => {

    document.querySelector(".displayBlock").style.display = 'block';

    document.querySelector("#d_name").innerText = obj.name;
    document.querySelector("#d_age").innerText = obj.age;
    document.querySelector("#d_total").innerText = obj.total;
    document.querySelector("#d_avg").innerText = obj.avg;

    document.querySelector("#d_grade").innerText = obj.grade;
}
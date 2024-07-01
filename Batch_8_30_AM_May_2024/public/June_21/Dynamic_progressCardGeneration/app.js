

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

    studentData.getTotalAndAvg = () => {
        studentData.total = 0;
        for (var i = 0; i < studentData.marks.length; i++) {
            studentData.total += studentData.marks[i];
        }
        studentData.avg = studentData.total / studentData.marks.length;
    }

    studentData.getStudentGrade = () => {
        studentData.grade = (studentData.avg >= 40) ? "you passed" : "You have a surprise";
        
    }

    studentData.displayStudentDetails = () => {
        studentData.getTotalAndAvg();
        studentData.getStudentGrade();
        document.querySelector(".displayBlock").style.display = 'block';
        document.querySelector("#d_name").innerText = studentData.name;
        document.querySelector("#d_age").innerText = studentData.age;
        document.querySelector("#d_total").innerText = studentData.total;
        document.querySelector("#d_avg").innerText = studentData.avg;
        document.querySelector("#d_grade").innerText = studentData.grade;
        console.log('studentData');
        console.log(studentData);
    }
    //reading data ends


    studentData.displayStudentDetails(); //display data to the user 
}


var addNewDetails = () => {
    document.querySelector(".displayBlock").style.display = 'none';
    document.querySelector("#sname").value = '';
    document.querySelector("#sage").value = '';
    document.querySelector("input[value=Male]").checked = true;
    

    for (var i = 1; i <= 5; i++) {
        var id = "#m" + i;
        document.querySelector(id).value = '';
    }
}
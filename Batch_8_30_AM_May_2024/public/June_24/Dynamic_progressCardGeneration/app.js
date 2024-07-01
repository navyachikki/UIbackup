
class StudentRegistrationData {
    constructor(data) {
        this.name = data.name;
        this.age = data.age;
        this.marks = data.marks;
    }
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    }
    getStudentGrade() {
        this.grade = (this.avg >= 40) ? "you passed" : "You have a surprise";
    }
    displayStudentDetails() {
        this.getTotalAndAvg();
        this.getStudentGrade();
        document.querySelector(".displayBlock").style.display = 'block';
        document.querySelector("#d_name").innerText = this.name;
        document.querySelector("#d_age").innerText = this.age;
        document.querySelector("#d_total").innerText = this.total;
        document.querySelector("#d_avg").innerText = this.avg;
        document.querySelector("#d_grade").innerText = this.grade;
    }
}


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
    var s1 = new StudentRegistrationData(studentData);
    s1.displayStudentDetails();

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
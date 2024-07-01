class UniversityDetails {
    constructor(p1, p2) {
        this.uniName = 'Andhra univ';
        this.univLocation = 'Vizag';
    }
    displayUnivDetails() {
        $("#dunivName").text(this.uniName);
        $("#dunivloc").text(this.univLocation);
    }
}


class SchoolDetails extends UniversityDetails { // PArent class | base class
    constructor(a, b) {
        super(a, 30);
        this.schoolName = 'ABC TEchno School';
        this.schoolLocation = 'Hyderabad';
        var maxReg = '200';
    }
    sample() {
        console.log("Frm parent sample method");
    }
}

class StudentDetails extends SchoolDetails { // Child class | derived class 
    constructor(obj) {
        super(10, 20);
        this.sname = obj.name;
        this.age = obj.age;
        this.marks = obj.marks;
        
    }
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    }
    getGrade() {
        this.grade = (this.total >= 40) ? 'Passed' : 'Failed';
    }
    sample() {
        console.log("Frm child method");
    }
    dispalyStudentData() {
        $("#displayBlock").show();
        this.getTotalAndAvg();
        this.getGrade();
        $("#dname").text(this.sname)
        $("#dtotal").text(this.total)
        $("#davg").text(this.avg)
        $("#dgrade").text(this.grade)

        $("#dschoolname").text(this.schoolName)
        $("#dschoolLoc").text(this.schoolLocation)
        this.sample();
        this.displayUnivDetails();
        console.log("maxReg" + this.maxReg);
    }
    
}

var studentDetails = [];

var resetDetails = () => {
    $("#sname").val('');
    $("#sage").val('');
    for (var i = 0 ; i < 5; i++) {
        let id = '#m' + (i+1);
        $(id).val('');
    }
}

var readData = () => {
    var obj = {};
    obj.name = $("#sname").val()
    obj.age = $("#sage").val()
    obj.marks = [];
    for (var i = 0 ; i < 5; i++) {
        id = '#m' + (i+1);
        obj.marks.push(parseInt($(id).val()));
    }
    resetDetails();
    var s1 = new StudentDetails(obj);
    s1.dispalyStudentData();

    studentDetails.push(s1);
    console.log(studentDetails);
}

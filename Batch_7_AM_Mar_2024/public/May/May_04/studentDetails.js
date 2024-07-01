var studentDetails = {
    readStudentDetails() {
        studentDetails.name = document.querySelector("#sname").value;
        
        if (studentDetails.name == '') {
            document.querySelector(".nameErr").style.display = 'block';
            return;
        } else {
            document.querySelector(".nameErr").style.display = 'none';
        }
        this.age = document.querySelector("#sage").value;
        if (this.age == '') {
            document.querySelector(".ageErr").style.display = 'block';
            return;
        } else {
            document.querySelector(".ageErr").style.display = 'none';
        }
        studentDetails.studentClass = document.querySelector("#studentClass").value;
        studentDetails.gender = document.querySelector("input[name=gender]:checked").value;
        this.marks = [];
    
        for (var i = 0; i < 5; i++) {
            var id = '#m' + (i + 1);  // #m1, #m2, #m3...#m5
            var m = document.querySelector(id).value;
            if (m == '') {
                document.querySelector(".marksErr").style.display = 'block';
                return;
            } else {
                document.querySelector(".marksErr").style.display = 'none';
            }
            m = parseInt(m);
            
            studentDetails.marks.push(m);
        }
        this.getTotalAndAvg();
    },
    getTotalAndAvg() {
        this.total = 0;
        for (var i = 0 ; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.getGrade();
    },
    getGrade() {
        this.grade = (this.avg >= 40) ? "U Passed" : "U have a surprise";
        this.displayStudentDetails();
    },
    displayStudentDetails() {

        document.querySelector(".progressCardBlock").style.display = 'block';

        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerText = this.gender;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
        document.querySelector("#dgrade").innerText = this.grade;

    }

};



var studentDtls = {
    ReadstudDtls () {
        studentDtls.name = document.querySelector("#studName").value;
        if (studentDtls.name =='' ) {
            document.querySelector(".nameCompValidation").style.display = 'block';
            return;
        } else {
            document.querySelector(".nameCompValidation").style.display = 'none';
        }

        studentDtls.age = document.querySelector("#studAge").value;
        if (studentDtls.age =='') {
            document.querySelector(".ageCompValidation").style.display = 'block';
            return;
        } else {
            document.querySelector(".ageCompValidation").style.display = 'none';
        }

        studentDtls.sClass = document.querySelector("#StudClass").value;

        studentDtls.sGender = document.querySelector("input[name=gender]:checked").value;
        studentDtls.sMarks = [];
        
        for (var i=0 ; i < 5; i++)
            {
                var Id = "#m" +(i + 1);
                var m = document.querySelector(Id).value;

                if (m =='') {
                    document.querySelector(".marksCompValidation").style.display = 'block';
                    return;
                } else {
                    document.querySelector(".marksCompValidation").style.display = 'none';
                }
                m = parseInt(m);
                studentDtls.sMarks.push(m);
            }
            console.log("Marks Length = " + this.sMarks.length);
        this.getTotalAndAvg();  
    },

    getTotalAndAvg() {
        studentDtls.totalMarks = 0;
        for (var i = 0; i < this.sMarks.length; i = i +1) {
            this.totalMarks = this.totalMarks + this.sMarks[i];
        }
        this.avg = this.totalMarks / this.sMarks.length;
        this.getGrade();
    },

    getGrade() {
        this.grade = this.avg >= 40 ? "U Are Passed" : "U Are Fail"
        console.log(studentDtls);
        this.displayStudDtl();
    },

    displayStudDtl() {
        document.querySelector(".progtable").style.display = 'block';
        document.querySelector("#dspName").innerText = this.name;
        document.querySelector("#dspAge").innerText = this.age;
        document.querySelector("#dspGender").innerText = this.sGender;
        document.querySelector("#dspClass").innerText = this.sClass;
        document.querySelector("#dsptotalMarks").innerText = this.totalMarks;
        document.querySelector("#dspavg").innerText = this.avg;
        document.querySelector("#dspgrade").innerText = this.grade;
    },

 };

 validateNumber  = () => {
    if (event.keyCode >= 48 && event.keyCode <= 57)
    {
        return true;
    }else {
        return false;
    }
}

 
 
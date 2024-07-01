var StdDetail = {

    rdData() {
        StdDetail.name = document.querySelector("#Name").value;
        if (StdDetail.name == '') {
            document.querySelector(".nameErr").style.display = 'block';
            return;
        }
        else {
            document.querySelector(".nameErr").style.display = 'none';
        }

        this.age = document.querySelector("#Age").value;
        if (StdDetail.age == '') {
            document.querySelector(".ageErr").style.display = 'block';
            return;
        }
        else {
            document.querySelector(".ageErr").style.display = 'none';
        }

        StdDetail.Class = document.querySelector("#Class").value;

        StdDetail.gender = document.querySelector("input[name=gender]:checked").value;
        StdDetail.marks = [];

        for (var i = 0; i < 4; i++) {
            var id = '#s' + (i + 1);
            var s = document.querySelector(id).value;
            if (s == '') {
                document.querySelector(".marksErr").style.display = 'block';
                return;
            }
            else {
                document.querySelector(".marksErr").style.display = 'none';
            }

            s = parseInt(s);
            StdDetail.marks.push(s);

        }
        
        this.getTotalnAvg();
    },
    getTotalnAvg() {
        this.total = 0
        for (var i = 0; i < this.marks.length; i++) {
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
        this.getGrade();
    },
    getGrade() {
        this.grade = this.avg >= 40 ? "Passed" : "Failed";
        this.disStdDetail();
    },

    disStdDetail() {
        document.querySelector("#progressDetail").style.display = 'block';
        document.querySelector("#dname").innerText = this.name;
        document.querySelector("#dage").innerText = this.age;
        document.querySelector("#dgender").innerText = this.gender;
        document.querySelector("#dtotal").innerText = this.total;
        document.querySelector("#davg").innerText = this.avg;
        document.querySelector("#dgrade").innerText = this.grade;

    }


};

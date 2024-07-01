var viewReport = () => {
    var output = document.querySelector("#output");
    output.removeAttribute("style");


    //   Display Name : 

    var name = document.querySelector("#name").value;
    var outname = document.querySelector("#outname");
    outname.innerHTML = name;


    //   Display Age : 

    var age = document.querySelector("#age").value;
    var outage = document.querySelector("#outage");
    outage.innerHTML = age;

    //   Display gender : 

    var gender = document.querySelector("input[name=gender]:checked").value;
    var outgender = document.querySelector("#outgender");
    outgender.innerHTML = gender;

    //   Display class: 

    var division = document.querySelector("#division").value;
    var outdivision = document.querySelector("#outdivision");
    outdivision.innerHTML = division;

    //   Display  average marks: 

    function average() {

        var subject1 = document.querySelector("#subject1").value;
        var subject2 = document.querySelector("#subject2").value;
        var subject3 = document.querySelector("#subject3").value;
        var avgmark = (parseInt(subject1) + parseInt(subject2) + parseInt(subject3)) / 3;
        console.log(avgmark);
        return avgmark;
    }

    var outmark = document.querySelector("#outmark");
    outmark.innerHTML = average();

    //dispaly grade
    function grade(x) {
        var outgrade = document.querySelector("#outgrade");
        if (x > 90) {
            outgrade.innerHTML = 'A+';
        }
        else if (x > 70 && x < 90) {
            outgrade.innerHTML = 'B+';
        }
        else if (x > 40 && x < 70) {
            outgrade.innerHTML = 'C+';
        }
        else {
            outgrade.innerHTML = 'Fail';
        }
    }
    grade(average());


}
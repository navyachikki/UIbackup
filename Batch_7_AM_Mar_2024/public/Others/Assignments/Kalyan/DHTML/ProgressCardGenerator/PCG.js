var StudentProgressCard ={

 StudentAvg: function  (Sub1,Sub2,Sub3,Sub4,Sub5){
        var avg = (Sub1+Sub2+Sub3+Sub4+Sub5)/5;
        return avg;
},

 StudentGrade: function(Avg){
            if(Avg >=90){
                return "A+"
            }
            else if( Avg >=75 ){
                return "B+"
            }
            else if( Avg >=45 ){
                return "C+"
            }
            else{
              return "F"
            }
  
},
  Display:function() {
    
    var StudentName = document.querySelector("#name").value;
    var StudentAge = document.querySelector("#age").value;
    var StudentGender = document.querySelector("input[name=gender]:checked").value;
    var StudentClass = document.querySelector("#Class").value;
    var Sub1 = document.querySelector("#sub1").value;
    Sub1= parseInt(Sub1);
    var Sub2 = document.querySelector("#sub2").value;
    Sub2= parseInt(Sub2);
    var Sub3 = document.querySelector("#sub3").value;
    Sub3= parseInt(Sub3);
    var Sub4 = document.querySelector("#sub4").value;
    Sub4= parseInt(Sub4);
    var Sub5 = document.querySelector("#sub5").value;
    Sub5= parseInt(Sub5);
    var Avg = this.StudentAvg(Sub1,Sub2,Sub3,Sub4,Sub5);
    var grade = this.StudentGrade(Avg);
    document.querySelector("#NameV").innerHTML=StudentName;
    document.querySelector("#ageV").innerHTML=StudentAge;
    document.querySelector("#genderV").innerHTML=StudentGender;
    document.querySelector("#ClassV").innerHTML=StudentClass;
    document.querySelector("#AvgV").innerHTML=Avg;
    document.querySelector("#gradeV").innerHTML=grade;
    document.querySelector("#prograssBlock").style="display:Block";
}

}
function generate(){
   StudentProgressCard.Display();
}
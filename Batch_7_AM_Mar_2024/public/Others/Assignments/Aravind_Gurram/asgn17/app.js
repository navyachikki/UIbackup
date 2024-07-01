var obj={
    empd(){
obj.name=document.querySelector("#aa").value;
obj.age=document.querySelector("#bb").value;
obj.dept=document.querySelector("#ee").value;
obj.gender=document.querySelector("#cc").value;
obj.sal=document.querySelector("#dd").value;
obj.sal = parseInt(obj.sal);
obj.Salary();
},
Salary(){
    obj.PF = (obj.sal * 14) / 100;
    obj.HRA = (obj.sal* 24) / 100;
    obj.totalsal = 0;
    obj.totalsal = obj.sal + obj.HRA + obj.PF;
    obj.display();
},
display() {
    document.querySelector("#dname").innerHTML = obj.name;
    document.querySelector("#dage").innerHTML = obj.age;
    document.querySelector("#dempdpt").innerHTML = obj.dept;
    document.querySelector("#dtotal").innerHTML = obj.totalsal;
}
}
class StudentDetails {
    constructor(obj) {
        this.sname = obj.name;
        
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
    console.log(obj);
}
var sname; // document.querySlector("#uname").value
var taskList = [
    "Do te development of Login page",
    "implement test cases for all teh modules",
    "Run the jobs to get data to files",
    "Do the code review of all modules",
    "Give the KT sessions, to new joiners",
    "Do the development of user tradign module"
];
var saveDetails = () => {
    sname = $("#uname").val();
}

var showTodaysTask = () => {
    var randomIndex = Math.floor(Math.random() * taskList.length);
    var taskName = taskList[randomIndex];

    taskName = `Todays task for ${sname} is : ${taskName}`;
    try {
        document.querySelector("#taskContainer").innerText = taskName;
    } catch(error) {
        alert("Boss, you missed to cdreate a container");
    } finally {
        showThanksMsg();
    }

    

}

var createContainer = () => {
    var containerTag = $("<div/>").addClass("container").attr("id", 'taskContainer');

    $("#mainBlock").append(containerTag);

    
}


var showThanksMsg = () => {
    setTimeout(() => {
        $("#thxBlock").show(); // document.querySelector("#thxBlock").style.display = 'block';
        $("#thxBlock").text("Thanks for using the page....")
    }, 3000);
}
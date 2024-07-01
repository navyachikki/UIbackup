var userName = "";

var taskList = [
    "Do the project review",
    "Finish teh pending tasks on login page",
    "Develop a Game for tech Trek event",
    "Do the mockup creation for details page",
    "Implement responsive ness for the complete app"
];

var showThanksBlock = () => {
    // document.querySelector(".thnksBlock").style.display = 'block';
    $(".thnksBlock").show();
    $(".thnksBlock").text("Thanks for using our page...");
}

var saveUserName = () => {
    userName = $("#uname").val();
}

var createTaskBlock = () => {
    document.querySelector(".mainContainer").innerHTML = '';
    var divTag = document.createElement("div")
    divTag.setAttribute("id", 'taskBlock');
    divTag.setAttribute('class', 'taskContainer');

    document.querySelector(".mainContainer").append(divTag);
}

var showTask = () => {
    var index = Math.floor(Math.random() * taskList.length);
    var task = taskList[index];
    var msg = "Hello Mr." +  userName + ' Todays task is -> ' + task;
    try {
        document.querySelector(".taskContainer").innerText = msg;
    } catch(error) {
        console.log(error);
        alert("boss u missed to create a task container,,, make sure u create, then u check for ur task")
    } finally {
        setTimeout(() => {
            showThanksBlock();
        }, 2000);
    }

    
}
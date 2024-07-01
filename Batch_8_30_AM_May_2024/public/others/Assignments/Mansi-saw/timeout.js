  var taskList=[
    'do on time',
    'dm jrffn ',
    'mop'
    
  ]
 var saveDetails =()=>{
    sname = $("#uname").val();
 }

 var taskForToday =()=>{
   
      var randomIndex  = Math.floor(Math.random() * taskList.length)
      var taskName = taskList[randomIndex];
      alert(randomIndex)
      taskName = 'Todays task for ' +  taskName;
      $("#taskContainer").text(taskName);
      showThankMsg();
 }

  var createContainer  =()=>{
   var containerTag = $("<div/>").addClass ("container").attr("id","taskContainer");
   $('#mainBlock').append (containerTag);
  }

   var showThankMsg = () => {
      setTimeout(() => {
         $("#thxBlock").show();
         $("#thxBlock").text(' Thanxx for using the page .....');
      }, 3000);
   }


 
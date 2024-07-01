/*var saveDetails = () => {
    var userDetails = {};
    userDetails.name = $("#uname").val();
    userDetails.name = userDetails.name.trim();
    userDetails.age = $("#uage").val();
    userDetails.age = parseInt(userDetails.age);
    userDetails.mailid = $("#umailid").val();


    if (userDetails.name == '') {
        $(".nameErr").show();
        return;
    } else {
        $(".nameErr").hide();//  document.querySeelctor(".nameErr").style.display = 'none'
    }

    
    if (userDetails.age < 21) {
        $(".ageErr").show();
        return;
    } else {
        $(".ageErr").hide();//  document.querySeelctor(".nameErr").style.display = 'none'
    }

    $("#msgBlock").text("Successfly got registered")

    console.log(userDetails);
} */


    var saveDetails = () => {
        var userDetails = {};
        userDetails.name = $("#uname").val();
        userDetails.name = userDetails.name.trim();
        userDetails.age = $("#uage").val();
        userDetails.age = parseInt(userDetails.age);
        userDetails.mailid = $("#umailid").val();
    
    
       try  {        
            if (userDetails.name == '') {
                // throws;
                throw "name_err";
            } else {
                $(".nameErr").hide();
            }
            if (userDetails.age < 21) {
                throw "age_err";
            }
            $("#msgBlock").text("Successfly got registered");
       } catch(err) {
            if  (err == 'name_err') {
                $(".nameErr").show();
            }
            if (err == 'age_err') {
                $(".ageErr").show();
            }
       }
    }
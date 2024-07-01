function myFunction() {
    debugger;

        var desc = document.getElementById("name").value;
        var ref =  document.getElementById("date7").value;
        var gender= document.getElementById("male").checked === true ? "Male" : "Female";
        var countrysel= document.getElementById("country").value;
        var mailidsel= document.getElementById("mailid").value;

        var desc_elements = document.getElementsByClassName("d");
        for (var i=0; i<desc_elements.length; i++) {
          desc_elements[i].innerHTML+=desc+"<br>";}
    
        var ref_elements = document.getElementsByClassName("r");
        for (var i = 0; i < ref_elements.length; i++) {
          ref_elements[i].innerHTML+=ref+"<br>";}

          var gender_ele= document.getElementsByClassName("b");
          for (var i = 0; i < gender_ele.length; i++) {
            gender_ele[i].innerHTML+=gender+"<br>";}
          var country = document.getElementsByClassName("a");
        for (var i = 0; i < country.length; i++) {
          country[i].innerHTML+=countrysel+"<br>";}
         
            var mailid= document.getElementsByClassName("c");
            for (var i = 0; i < mailid.length; i++) {
                mailid[i].innerHTML+=mailidsel+"<br>";}
            var buttons=document.getElementsByClassName("e");
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].innerHTML+="<input type=\"button\" onclick='Delitem("+ i +")' value='Delete'/><input type=\"button\" onclick='Editlitem("+ i +")' value='Edit'/><br>";
            }

    }
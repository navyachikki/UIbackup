  var empDetails =[
      {
        name : 'Rajesh',
        age : 45,
        salary : 45000,
        department : 'IT',
        Image: 'file:///C:/Users/Mansi/OneDrive/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/Google%20Images/emp%202.png'
      },

      {
        name : 'Satish',
        age : 25,
        salary : 45000,
        department : 'TECH',
        Image: 'file:///C:/Users/Mansi/OneDrive/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/Google%20Images/emp%202.png'
      },

      {
        name : 'MEENA',
        age : 46,
        salary : 45000,
        department : 'MANAGER',
        Image: 'file:///C:/Users/Mansi/OneDrive/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/Google%20Images/emp%202.png'
      },

      {
        name : 'shubham',
        age : 27,
        salary : 45000,
        department : 'IT',
        Image: 'file:///C:/Users/Mansi/OneDrive/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%A0%E0%B8%B2%E0%B8%9E/Google%20Images/emp%202.png'
      },

  ]
             var loadEmp =(empDetails)=> {
              var divTag = document.createElement("div")                          
              var  divContainer = document.createElement("divContainer");
              divContainer.setAttribute("class","Container")

            var ulTag=document.createElement("ul");
            var li1 = document.createElement("li");
            li1.innerText = 'employee name'+ empDetails.name
            ulTag.append(li1)
           
            
            var li2 = document.createElement("li");
            li1.innerText = 'AGE' + empDetails.age
            ulTag.append(li2)
          

            var li3 = document.createElement("li");
            li1.innerText = 'SALARY' + empDetails.salary
            ulTag.append(li3)
           


            var li4 = document.createElement("li");
            li1.innerText = 'DEPARTMENT' + empDetails.department
            ulTag.append(li4)
           


            var li5 = document.createElement("li");
            var img = document.createElement("img")
            img.setAttribute("src",empDetails.Image)
            li5.append(img)
            ulTag.append(li5)
            divContainer.append(divTag);
           
            document.querySelector('#container').append(divContainer)
           }

           for (var i =0;i<empDetails.length;i++) {
            loadEmp(empDetails[i])
           }



















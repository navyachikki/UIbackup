var studentDetails =[
    { name: ' Mahesh Jadav', age: 22, gender: 'male', qualification:'B.Tech',course:'UI FULL Stack', paid: 5000, total: 10000 },
    {name: ' Riddhesh pawar', age: 21, gender: 'male', qualification:'B.Tech',course:'UI FULL Stack', paid: 4000, total: 10000 },
    {name: ' piyush gupta', age: 20, gender: 'male', qualification:'B.Tech',course:'UI FULL Stack' ,paid: 6000, total: 10000 },
    {name: ' karan pawar', age: 23, gender: 'male', qualification:'B.Tech',course:'UI FULL Stack' , paid: 3000, total: 10000 },
    {name: ' Ayog Jadav', age: 22, gender: 'male', qualification:'B.Tech',course:'UI FULL Stack' , paid: 9000, total: 10000 },
    {name: ' Abhinav Yadav', age: 21, gender: 'male', qualification:'B.Tech',course:'UI FULL Stack' ,paid: 4000, total: 10000 },
     ];
    
     var renderData = (data)=>{
  
           var template= Mustache.render($("#details").html(), data);
        
       $('#receipt').append($(template))
     };
    
    document.addEventListener('DOMContentLoaded', ()=>{
        for(var i=0;i< studentDetails.length;i++){
            renderData( studentDetails[i])
        }
    })

 
var second=0;
var minute=0;
var hour=0;
var d=new Date();


setInterval(  
    
    function()
    {
    
    d=new Date();
    hour =d.getHours()*30 ;
    minute=d.getMinutes() *6;
    second =d.getSeconds() *6;

        
    //12 hours on a clock and a full circle is 360 degrees so each hour represents 30 degrees (360 / 12) =30
    // Each minute moves the hour hand by 0.5 degrees (30 degrees / 60 minutes)=0.5
        document.querySelector(".hourHand").style.transform = "rotate(" + hour + "deg)";
   
       

    //60 minutes in an hour and a full circle is 360 degrees so each minute represents 6 degrees (360 / 60)=6
   
        document.querySelector(".minuteHand").style.transform = "rotate(" + minute + "deg)";
    
        //60 seconds in a minute, and a full circle is 360 degrees, so each second represents 6 degrees (360 / 60)=6
    
        document.querySelector(".secHand").style.transform = "rotate(" + second + "deg)";
    

    

},1000);
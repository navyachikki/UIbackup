let names=["The Adventures of Augie March",
            "All The King's Men",
            "Animal Farm",
            "Appointment in Samarra",
            "Atonement",
            "Beloved",
            " The Big Sleep",
            "Catch - 22",
            "The Catcher In The Rye",
            "A Clockwork Orange",
            "A Dance to the Music of Time",
            "The Day of the Locust",
            "Deliverance",
            "The Golden Notebook",
            "Go Tell It on the Mountain",
            "The Grapes of Wrath",
            "The Great Gatsby",
            "Heart of Darkness",
            "Invisible Man",
            "Light in August",
            "Lolita",
            "Lord of the Flies",
            "The Lord of the Rings",
            "The Moviegoer",
            "Lucky Jim",
            "Midnight's Children",
            "Mrs.Dalloway",
            "Nineteen Eighty - Four",
            "On The Road",
            "A Passage to India",
            "Portnoy's Complaint	",
            "The Prime of Miss Jean Brodie",
            "Scoop",
            "Sons and Lovers	",
            "The Sound and the Fury",
            "The Sun Also Rises",
            "Things Fall Apart",
            "To Kill a Mockingbird",
            "To the Lighthouse",
            "Ulysses",
            "Under the Net",
            "Wide Sargasso Sea",];

// sorted the names in ascending order.            
let sortedNames=names.sort();

//reference
let input=document.getElementById("input");

//execute function on keyup
input.addEventListener("keyup",(e)=>{

    //initially remove all element (so if user erase letter or add new then clean previous output.)
    removeElements();


    //loop through above array
    for(let i of sortedNames){
        //convert input to lowercase and compare with string

        if(i.toLowerCase().startsWith(input.value.toLowerCase()
        )&& input.value !="") {
            //create li element
            let listItem=document.createElement("li");
            //one common class name
            listItem.classList.add("list-items");
            listItem.style.cursor="pointer";
            listItem.setAttribute("onclick","displayNames('"+i+"')");
            //display match part in bold
            let word="<b>"+i.substring(0,input.value.length)+"</b>";
            word+= i.substring(input.value.length);
            
            //display the value in array
            listItem.innerHTML=word;
            document.querySelector(".list").appendChild(listItem);
    
        }
    }
});
function displayNames(value){
    input.value=value;
    removeElements();

}
function removeElements(){
    //clean all the item
    let items=document.querySelectorAll(".list-items");
    items.forEach((item)=>{
        item.remove();
    });
}

function submitData(){
    var outputSlip=document.querySelector(".outputSlip");
    outputSlip.setAttribute("style","display:block");
    var name=document.querySelector("#name").value;
    var age=document.querySelector("#age").value;
    var gender=document.querySelector("#gender").value;
    var book=document.querySelector("#input").value;
    console.log(name,age,gender,book);
    
    var outname=document.querySelector("#outname");
    var outage=document.querySelector("#outage");
    var outgender=document.querySelector("#outgender");
    var outbook=document.querySelector("#outbook");
    outname.innerHTML=name;
    outage.innerHTML=age;
    outgender.innerHTML=gender;
    outbook.innerHTML=book;

}


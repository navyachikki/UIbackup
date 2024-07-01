let names = [
    "The Adventures of Augie March",
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
    "Wide Sargasso Sea",
];

// sort names in ascending Order
let sortedNames = names.sort();
// console.log(sortedNames);

// Reference 

let input = document.getElementById("input");


// Execute function on keypad

input.addEventListener("keyup", (e) => {

    // loop through above array


    // Initially  remove all elements (so if user erases a letter or adds new letter then clean previous outputs)

    removeElements();

    for (let i of sortedNames) {
        // convert  input to lowercase and compare with each string

        if (
            i.toLowerCase().startsWith(input.value.toLowerCase()) &&
            input.value != ""
        ) {
            // create li element 
            let listItem = document.createElement("li");
            // One common Class Name 
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");

            // Display Matched Part  in bold
            let word = "<b>" + i.substring(0, input.value.length) + "</b>";
            word += i.substring(input.value.length);
            // console.log(word)

            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayNames(value) {
    input.value = value;
    removeElements();
}

function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
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

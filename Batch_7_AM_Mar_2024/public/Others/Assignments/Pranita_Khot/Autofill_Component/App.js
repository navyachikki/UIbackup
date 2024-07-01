var Bookdata = {
    "A": ["Animal Farm", "Anne of Green Gables", "All Together Dead", 
    "All Quiet on the Western Front", "Alice in Wonderland"],

    "B": ["Babel-17", "Baber's Apple", "The Baby Squad", "Babyji",
    "The Bachman Books", "The Bad Beginning", "Back When We Were Grownups", "Bad Bug Book" ],

    "C": ["Cahokia Jazz", "California", "Calling Me Home", "The Camel Bookmobile", "The Candy House", 
     "Cane River", "Cantoras"]

}

function Books() {
    let book = document.querySelector("#Book");
    book.innerHTML = '<Option value = " "> Select Book </option>';

    for(let i=0; i<Bookdata.length; i++) {
        var option = document.createElement('option');
        option.text = Bookdata[i];
        option.value = Bookdata[i];
        bookSelect.appendchild(option);
    }
}

Books();





    

   
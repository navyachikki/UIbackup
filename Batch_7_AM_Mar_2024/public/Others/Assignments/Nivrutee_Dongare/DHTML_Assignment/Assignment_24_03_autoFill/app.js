var bookData = {
    "A": ["Animal Farm", "Alice's Adventures in Wonderland", "A Game of Thrones", "A Tale of Two Cities"],
    "B": ["Brave New World", "The Brothers Karamazov", "The Book Thief", "The Bell Jar"],
    "C": ["The Catcher in the Rye", "Crime and Punishment", "The Count of Monte Cristo", "Charlotte's Web"],
    "D": ["Dune", "Dracula", "The Da Vinci Code", "Death of a Salesman"],
    "E": ["Ender's Game", "Emma", "The Exorcist", "East of Eden"],
    "F": ["Frankenstein", "Fahrenheit 451", "For Whom the Bell Tolls", "The Fault in Our Stars"],
    "G": ["The Great Gatsby", "Gone with the Wind", "The Grapes of Wrath", "The Girl with the Dragon Tattoo"],
    "H": ["Harry Potter and the Philosopher's Stone", "The Hobbit", "Heart of Darkness", "Hitchhiker's Guide to the Galaxy"],
    "I": ["Inferno", "I, Robot", "The Invisible Man", "The Immortal Life of Henrietta Lacks"],
    "J": ["Jane Eyre", "Jonathan Strange & Mr Norrell", "Jurassic Park", "Journey to the Center of the Earth"],
    "K": ["Kafka on the Shore", "The Kite Runner", "The Killer Angels", "The Kitchen God's Wife"],
    "L": ["The Lord of the Rings", "Les Misérables", "Little Women", "Lolita"],
    "M": ["Moby-Dick", "The Metamorphosis", "The Martian", "Memoirs of a Geisha"],
    "N": ["Nineteen Eighty-Four", "Northanger Abbey", "Never Let Me Go", "Norse Mythology"],
    "O": ["One Hundred Years of Solitude", "Of Mice and Men", "Outlander", "On the Road"],
    "P": ["Pride and Prejudice", "The Picture of Dorian Gray", "Perfume: The Story of a Murderer", "Pippi Longstocking"],
    "Q": ["The Queen of the Damned", "Q & A", "Quicksand", "Quarantine"],
    "R": ["Romeo and Juliet", "The Road", "Rebecca", "The Red Badge of Courage"],
    "S": ["Slaughterhouse-Five", "The Secret Garden", "The Stranger", "The Shining"],
    "T": ["To Kill a Mockingbird", "Treasure Island", "The Time Machine", "The Turn of the Screw"],
    "U": ["Ulysses", "The Underground Railroad", "Under the Dome", "Unbroken"],
    "V": ["Vanity Fair", "Veronika Decides to Die", "V for Vendetta", "The Velveteen Rabbit"],
    "W": ["Wuthering Heights", "War and Peace", "The Wind-Up Bird Chronicle", "Where the Red Fern Grows"],
    "X": ["Xenocide", "Xenogenesis", "Xenophobe's Guide to the Greeks", "Xenophobe's Guide to the Italians"],
    "Y": ["Y: The Last Man", "Yertle the Turtle", "Youth", "Year of Wonders"],
    "Z": ["The Zookeeper's Wife", "Zorba the Greek", "Zen and the Art of Motorcycle Maintenance", "Zombie Survival Guide"]
}


function books () {
    let book = document.querySelector("#book");
    book.innerHTML = '<option value="">Select book</option>';

    for(let i=0; i<bookData.length; i++){
        var option = document.createElement('option');
        option.text = bookData[i];
        option.value = bookData[i];
        countrySelect.appendChild(option);
    }
}

books();
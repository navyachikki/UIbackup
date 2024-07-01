const books = [
    "The Catcher in the Rye",
    "To Kill a Mockingbird",
    "Pride and Prejudice",
    "The Great Gatsby",
    "Jane Eyre",
    "Harry Potter and the Philosopher's Stone",
    "The Lord of the Rings",
    "The Hobbit",
    "1984",
    "Animal Farm",
  ];
  
  const bookList = document.getElementById("bookList");
  
  function filterBooks() {
    console.log("filterBooks")
    const keyword = document.getElementById("bookSearch").value.toLowerCase();
    
    bookList.innerHTML = "";
    //console.log(bookList)
    if(keyword === "") return;
    //console.log(keyword,"hhh")
    const filteredBooks = books.filter((book) => book.toLowerCase().includes(keyword));
    //console.log(filteredBooks)
    for (let i = 0; i < filteredBooks.length; i++) {
      const li = document.createElement("li");
      li.textContent = filteredBooks[i];
      bookList.appendChild(li);
    }
  }



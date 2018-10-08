alert("Welcome to book purchase");
let bookName=prompt("Enter your bookName to purchase a book");
if(bookName !='' && typeof bookName == 'string'){
    var bookCount =+prompt("Enter book count:");
    if(bookCount !='' && typeof bookCount == 'number'){
     console.log(`Your got Placed:
    
     Book Count:${bookCount}
     Book Name :${bookName}`
     )
    }else{
     console.log("Your order cant placed:");}
    }else{
     console.log("Book name cant be empty it can be string:");
     
     }
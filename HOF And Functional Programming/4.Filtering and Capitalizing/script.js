const books=[
    {
        "Name":"The Giver",
        "Published":"2008",
        "Author_Name":"nelson kings"
    },
    {
        "Name":"Great Adventurer",
        "Published":"2012",
        "Author_Name":"william anderson"
    },
    {
        "Name":"Lord of the Flies",
        "Published":"2016",
        "Author_Name":"sam gibson"
    },
    {
        "Name":"Peter Pan",
        "Published":"2005",
        "Author_Name":"peter walkings"
    },
    {
        "Name":"Harry Potter",
        "Published":"2009",
        "Author_Name":"ashley pints"
    },
    {
        "Name":"Gladiator",
        "Published":"2013",
        "Author_Name":"david Rhymes"
    },
    
]
function capitalizedAuthorName(authorName){
    return authorName
    .split(" ")
    .map(item=>item.charAt(0).toUpperCase()+item.slice(1))
    .join(" ");
}


function filterAndCapitalizeBooks(books){
    const filteredBooks=books.filter(book=>book.Published>=2010);
    const capitalizedBooks=filteredBooks.map(book=>{
        return{
            ...book,
            Author_Name:capitalizedAuthorName(book.Author_Name)
        }
       
    })
    return capitalizedBooks;
}

const filteredAndCapitalizeBooks=filterAndCapitalizeBooks(books);
console.log(filteredAndCapitalizeBooks);

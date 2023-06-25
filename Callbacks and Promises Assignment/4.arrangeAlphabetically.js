const books=[
    {title:"Harry Potter",author:"Mag Kenpins",year:2002},
    {title:"The Giver",author:"Michale Bay",year:2001},
    {title:"The 100",author:"John Kennedy",year:2004},
    {title:"Lord of The Rings",author:"Ramp Halking",year:2010},
    {title:"A Moment to Remember",author:"May Krush",year:2022},
]
function sort(book,titleSort){
const titles=book.map(item=>item.title);
return titleSort(titles);
}
function sortedTitle(title){
const tilteSorted=title.sort();
console.log(tilteSorted);
}
sort(books,sortedTitle);
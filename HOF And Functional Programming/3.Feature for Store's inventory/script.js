const itemDetails=[
{"name":"Java Book",
"Price":2000},
{"name":"C Book",
"Price":3000},
{"name":"DSA Book",
"Price":1000},
{"name":"C++ Book",
"Price":2000},
];
const itemDetailsConverted=itemDetails.map((items)=>{
    items.Price*=80;
    return items;

})
console.log(itemDetailsConverted);
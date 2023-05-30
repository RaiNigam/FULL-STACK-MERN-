const customerCart=
[{
"itemName":"Bread",
"unitPrice":20,
"quantity":3,
},

{
"itemName":"Noodles",
"unitPrice":30,
"quantity":1,
},
{
"itemName":"Chocolate",
"unitPrice":50,
"quantity":2,
},

{
"itemName":"Biscuit",
"unitPrice":35,
"quantity":4,
},
{
"itemName":"Coke",
"unitPrice":200,
"quantity":1,
},{
"itemName":"water",
"unitPrice":20,
"quantity":1,
}];
let sum=0;
const values=customerCart.map(value=>value.unitPrice*value.quantity);
console.log(values);

for(i=0;i<values.length;i++){
    sum+=values[i];
}
console.log(`The final and total price is ${sum}`);
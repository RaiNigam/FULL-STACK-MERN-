const dishes=[
 { name: 'Pizza', cost: 10 },
  { name: 'Salad', cost: 5 },
  { name: 'Burger', cost: 8 },
    
]
function calculateBill(dishes,numberOfPeople){
  
    const totalBill=dishes.reduce((sum,dish)=>sum+dish.cost,0);
    const billPerPerson=totalBill/numberOfPeople;
    return{
        totalBill:totalBill,
        billPerPerson:billPerPerson,
    }
}
const numberOfPeople=4;

const bill=calculateBill(dishes,numberOfPeople);

console.log(bill.totalBill);
console.log(bill.billPerPerson);
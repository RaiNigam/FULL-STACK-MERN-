const userDetails=[{
    "Name":"Nigam",
    "Balance":20000,
},
{
    "Name":"Rai",
    "Balance":40000,
    
},
{
    "Name":"Cma",
    "Balance":20000,
},
{
    "Name":"Raju",
    "Balance":4000,
},
{
    "Name":"Kag",
    "Balance":200000,
}];
const names=document.querySelector('.name');
const amount=document.querySelector(".amount");
const btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    const transactionType=document.querySelector('input[type = radio]:checked').value;
    const result = userDetails.find(({ Name }) => Name === names.value);
    const balance=document.querySelector(".balance");
    switch(transactionType){
        case "widthdraw":
            balance.value=result.Balance-amount.value;
            break;
        case "deposit":
            balance.value=result.Balance+parseInt(amount.value);
            break;
        default:
            console.log("Wrong Input");
            break;

    }
})
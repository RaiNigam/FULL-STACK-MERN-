const person={
    name:"Mithun",
    age:21,
    address:{
        street:"BB,Block B,Industrial Area.",
        city:"Sector 62,Noida",
        state:"Uttar Pradesh",
    },
}
function extractData(obj){
    const { name,address:{street},}=obj;
    return {name,street};
}
console.log(extractData(person));
function getPerson(obj){
    try{
        if(typeof obj!=="object" || !obj.hasOwnProperty("name")||!obj.hasOwnProperty("name") ||!obj.hasOwnProperty("age")){
            throw new Error("Invalid parameter type");
        }
        return `Name:${obj.name}, Age:${obj.age}`;
    }catch(error){
          return error.message;   
    }
}
console.log(getPerson({name:"Mithun",age:20}));
console.log(getPerson({name:"Mithun"}));
console.log(getPerson(["name","Mithun"]));

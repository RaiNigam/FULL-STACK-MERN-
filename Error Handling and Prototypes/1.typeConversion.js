function convertToNumber(str){

   const num=Number(str);
   try{
   if(isNaN(num)){
    throw new Error("Invalid Number");
   }
   return num;
}catch(error){
    return "Invalid Number is taken";
}    

}
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));

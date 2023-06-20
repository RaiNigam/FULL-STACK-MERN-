function numberChecker(arr){
    return function(number){
        return arr.includes(number);
    }
}
const arr=[1,2,3,4,5];
const checkNum=numberChecker(arr);
console.log(checkNum(3));
console.log(checkNum(6));


const numbers=[1,2,3,4,5,6];
function double(num,fn){
    return fn(num);
}
function makeDouble(num){
    return num.map(num=>num*2);
}
console.log(double(numbers,makeDouble));
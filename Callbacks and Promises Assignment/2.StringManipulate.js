function manipulateString(string,fn){
    
    console.log(fn(string)) ;
}
function logString(str){
    const upperStr=str.toUpperCase();
    return "The manipulated string is:"+upperStr;
}

manipulateString("Hello, World!",logString)
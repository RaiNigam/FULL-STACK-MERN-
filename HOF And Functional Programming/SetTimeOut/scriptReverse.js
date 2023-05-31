const input="My name is Nigam Rai and I live in Kapan";
function reverseString(){
    const reverseString=input.split(' ');
    const reverse=reverseString.reverse()
    console.log(reverse.toString().replaceAll(',',' '));
}
setTimeout(reverseString,2000);
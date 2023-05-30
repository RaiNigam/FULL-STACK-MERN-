const firstNumber=document.querySelector('.firstNumber');
const secondNumber=document.querySelector('.secondNumber');
const operators=document.querySelectorAll('.operate');
const result=document.querySelector('.result');
operators.forEach((e)=>{
    e.addEventListener("click",()=>{
        const operatorValue=e.innerText;
      let results;
        switch(operatorValue){
            case '+':   
results=+firstNumber.value+ +secondNumber.value;
            break;

            case '-':
                console.log(typeof firstNumber.value);
                
results=+firstNumber.value- +secondNumber.value;
            break;

            case '*':
                console.log(typeof firstNumber.value);
                
results=+firstNumber.value*+secondNumber.value;
            break;

            case '/':
                console.log(typeof firstNumber.value);
                
results=+firstNumber.value/ +secondNumber.value;
            break;
        }
        result.value=results;
    });
})



const celcius=document.querySelector('.celcius');
const btn=document.querySelector('.btn');

const input=document.querySelector('input');
btn.addEventListener('click',()=>{
    
        const label=document.createElement('label');
        label.innerText="Result";
        const convertForm=document.querySelector('.convertForm');
        convertForm.appendChild(label);
        const resultClass=document.createAttribute('class');
        resultClass.value="result";
        const input=document.createElement('input');
        input.setAttributeNode(resultClass);
        convertForm.appendChild(input);
        let fahreinheit=(celcius.value*(9/5))+32;
        const result=document.querySelector('.result');
    
   
});
const name=document.querySelector('.name');
const result=document.querySelector('.result');
const btn=document.querySelector('.btn');
btn.addEventListener("click",()=>{
    values=name.value;
   const lower= values.toLowerCase();
    const capitalized=lower.replace(lower[0],lower[0].toUpperCase());
    result.value=capitalized
    ;
})

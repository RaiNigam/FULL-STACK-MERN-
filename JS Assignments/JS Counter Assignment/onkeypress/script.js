const counter=document.querySelector('.counter');
const btn=document.querySelectorAll('.btn');
console.log(btn);
let count=0;
btn.forEach((e)=>{
    e.addEventListener('keypress',()=>{
        if(e.classList.contains('increase')){
            count=count+1;
            counter.innerText=count;
        }else if(e.classList.contains('decrease')){
            count=count-1;
            counter.innerText=count;
        }else{
            count=0;
            counter.innerText=count;
        }
    });
});
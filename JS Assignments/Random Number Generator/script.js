const btn=document.querySelector(".btn");
const result=document.querySelector(".result");
btn.addEventListener("click",()=>{
    result.value=Math.floor(Math.random()*100);
});
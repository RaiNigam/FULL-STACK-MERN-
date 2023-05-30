const marks=document.querySelectorAll('.marks');
const btn=document.querySelector(".btn");
const result=document.querySelector('.result');
btn.addEventListener("click",()=>{
    let max=0;
    marks.forEach((e)=>{
        mark=e.value;
        if(+mark>max){
            max=mark;
        }
});
result.value=max;


});
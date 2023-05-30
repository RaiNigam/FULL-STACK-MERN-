const btn=document.querySelector(".btn");
const heading=document.querySelector('.heading');
btn.addEventListener("click",()=>{
    if(heading.innerText==="PwSkills"){
        heading.innerText="The most affordable learning platform";
    }else{
        heading.innerText="PwSkills";
    }
});
const topics=["HTML and Semantincs","Starting with CSS","Working Template","Mobile responsive webpages","Grid and Flex-box in CSS","Projects using HTML and CSS","Version Contorl and Git","Getting Started with JavaScript","Advance JavaScript","Working with DOM","Making projects using HTML,CSS and JavaScript","Understanding Fundamental of Computer Science","Getting Started with Database","Starting with NodeJS and ExpressJS","understanding React and its Fundamentals","Understanding Hooks and Routers","Starting and Completing Full Fledge Projects"];
const lists=document.querySelector(".lists");
const btn=document.querySelector(".btn");
const msg=document.querySelector(".message");
let n=0;
btn.addEventListener("click",()=>{
for(i=n;i<=n;i++){
    if(n>=topics.length){
        msg.innerText="There is no more items left";
        msg.style.color="red";
        msg.style.fontSize="20px";
        break;
    }
        const li=document.createElement("li");
        lists.appendChild(li);
        li.innerText=topics[i];
 
}
n=n+1;
});



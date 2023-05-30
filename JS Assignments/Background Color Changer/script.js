const btn=document.querySelector('.btn');
let colorCode=document.querySelector('.colorCode');
const colors=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];
btn.addEventListener("click",()=>{
    color="#";
    for(let i=0;i<6;i++){
        let rand=Math.floor(Math.random()*colors.length);
        color+=colors[rand];
    }
    colorCode.innerText=color;
    document.body.style.backgroundColor=color;
})
const email=document.querySelector(".email");
const password=document.querySelector('.pass');
const btn=document.querySelector('.btn');
btn.addEventListener("click",()=>{
    const regEx=/@/gi;
    const check=regEx.test(email.value);
    const arr=Array.from(password.value);
    const p=document.createElement('p');
    const cs=document.createAttribute("class");
    cs.value="Result";
    p.setAttributeNode(cs);
    const loginForm=document.querySelector(".loginForm");
    loginForm.appendChild(p);
    if(arr.length>8&&check==true){
        p.innerText="Valid email and password";
        p.style.color="green";
        p.style.fontSize="30px";
    }else{
        p.innerText="Invalid email and password";
        p.style.color="red";
        p.style.fontSize="30px";
    }
})
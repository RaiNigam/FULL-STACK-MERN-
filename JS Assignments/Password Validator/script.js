const password=document.querySelector('.password');
console.log(password.value);

const confirmPwd=document.querySelector('.confirmPwd');
console.log(confirmPwd.value);
const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    if(password.value==confirmPwd.value){
        alert('Password Matched.Password Validation Successful');
        console.log('Password Matched.Password Validation Successful');    
    }else{
        alert(`Password didn't match. Password Validation unsucessful.`);
        console.log(`Password didn't match. Password Validation unsucessful.`);
    }
});

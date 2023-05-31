const key=document.querySelector('.key');
document.addEventListener('keyup',()=>{
    key.innerHTML="Key is released!";
});
document.addEventListener('keydown',()=>{
    key.innerHTML="Key is pressed!";
})
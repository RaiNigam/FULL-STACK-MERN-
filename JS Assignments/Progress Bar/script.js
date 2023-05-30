const container=document.querySelector(".container");
const bar=document.querySelector('.progress-bar');
document.addEventListener("scroll",()=>{
    const  winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    console.log(winScroll);
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(height);
  const scrolled = (winScroll / height) * 100;
  console.log(scrolled);
   bar.style.width = scrolled + "%";
})
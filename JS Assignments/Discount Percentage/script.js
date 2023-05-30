const originalPrice=document.querySelector(".originalPrice");
const discountPrice=document.querySelector('.discountPrice');
const result=document.querySelector('.result');
const btn=document.querySelector('.btn');
btn.addEventListener("click",()=>{
    let discount=originalPrice.value-discountPrice.value;
    let discountPercent=((discount/originalPrice.value)*100).toFixed(2);
    result.value=discountPercent;
})
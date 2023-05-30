const buy_section=document.querySelector(".buy_section");
const item=document.querySelectorAll('.item');
const addToCartBtn=document.querySelectorAll('.add');
const addInCart=document.querySelector(".addInCart");
const cart=document.querySelector(".cart");
const cartBtn=document.querySelector('button');
addToCartBtn.forEach((e,index)=>{
    e.addEventListener("click",()=>{
       const li=document.createElement('li');
       li.setAttribute('class','items');
    addInCart.appendChild(li);
    li.innerText=item[index].innerText;
   })
});

cartBtn.addEventListener("click",()=>{
const items=document.querySelectorAll('.items');
const newArr=[];
items.forEach((el,index,Array)=>{
   
   newArr.push(el.innerText);
});
function removeDuplicates(newArr) {
   return newArr.filter((item,
       index) => newArr.indexOf(item) === index);
}
const li=document.createElement('li');
   li.setAttribute('class','cartItems');
   cart.appendChild(li);
finalArr=removeDuplicates(newArr);
   finalArr.forEach(el=>{
      li.innerText=el;
   })
});

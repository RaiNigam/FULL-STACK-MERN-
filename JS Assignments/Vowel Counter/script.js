const name=document.querySelector('.name');
const result=document.querySelector('.result');
const btn=document.querySelector('.btn');

btn.addEventListener("click",()=>{
    values=name.value;
   const lower= values.toLowerCase();
   let count=0;
   for(value of lower){
    if(value.includes('a')||value.includes('e')||value.includes('i')||value.includes('o')||value.includes('u')){
        count=count+1;
    }; 
    
   }
   result.value=count;
  
  });
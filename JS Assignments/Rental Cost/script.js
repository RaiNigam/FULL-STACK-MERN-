const typeBtn=document.getElementsByName('type');
const quantity=document.querySelector('.quantity');
const btn=document.querySelector('.btn');
const result=document.querySelector('.result');

const days=document.querySelector('.days')

typeBtn.forEach((e)=>{
    e.addEventListener('click',()=>{
        const type=document.querySelector('input[type = radio]:checked').value;
        let total=0;
        switch(type){
            case "midsize":
                total=quantity.value*10000*days.value;
                break;
            case "luxury":
                total=quantity.value*10000*days.value;
                break;
                default:
                    total=quantity.value*10000*days.value;
                   break;
        } 
        btn.addEventListener('click',()=>{
 
            result.value=total;
        });
        
        
    });


})
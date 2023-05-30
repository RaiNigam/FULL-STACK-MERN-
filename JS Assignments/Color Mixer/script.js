const firstColor=document.querySelector('.firstColor');
const secondColor=document.querySelector('.secondColor');
const btn=document.querySelector('.btn');
const result=document.querySelector('.result');
            
btn.addEventListener("click",()=>{
    color1=firstColor.value.toLowerCase();
    color2=secondColor.value.toLowerCase();
    switch(color1){
        case "red":
            switch(color2){
                case "blue":
                    result.value="purple";
                    document.body.style.backgroundColor=result.value;
                    break;
                case "yellow":
                    result.value="orange";
                    document.body.style.backgroundColor=result.value;
                    break;
            }
        break;
        case "blue":
            switch(color2){
                case "red":
                    result.value="purple";
                    document.body.style.backgroundColor=result.value;
                    break;
                case "yellow":
                    result.value="green";
                    document.body.style.backgroundColor=result.value;
                    break;
            }
        break;
        case "yellow":
            switch(color2){
                case "red":
                    result.value="orange";
                    document.body.style.backgroundColor=result.value;
                    break;
                case "blue":
                    result.value="green";
                    document.body.style.backgroundColor=result.value;
                    break;
            }
        break;

        
        default:
            result.value="Invalid Color Combination";
    }
})
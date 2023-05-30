const image=document.querySelector(".imgNezuko");
const container=document.querySelector(".container");
image.style.position = "relative";
image.style.left = "0px";
image.style.top = "0px";


document.addEventListener("keydown",(e)=>{
    
 if(e.key=="ArrowUp"){
    pixel=parseInt(image.style.top)-5 + "px";
    image.style.top=pixel;
 }
 else if(e.key=="ArrowDown"){
   pixel=parseInt(image.style.top)+5 + "px";
    image.style.top=pixel;
 }
 else if(e.key=="ArrowLeft"){
   pixel=parseInt(image.style.left)-5 + "px";
    image.style.left=pixel;
 }
 else if(e.key=="ArrowRight"){
   pixel=parseInt(image.style.left)+5 + "px";
    image.style.left=pixel;
 
   }else{

      console.log("Wrong key pressed!");
   }
});
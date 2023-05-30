document.addEventListener('DOMContentLoaded',()=>{
    const words=document.querySelector("#sample").innerText;
    const arrWords=words.trim().split(' ').map(check).join(' ');
    document.querySelector("#sample").innerHTML=arrWords;
    function check(word){
        if(word.length>8){
            word = '<span style="background:yellow;">' + word + '</span>';
                  } else {
                    word;
                  }
        return word;
    
      }
  })
  
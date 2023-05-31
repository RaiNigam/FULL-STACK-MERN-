let count=0;
function timer(){
   count=count+1;
    console.log(`Random Number will be generated in ${count}seconds`);
    if(count>=3){
        count=0;
        setTimeout(randomNumber);
    }
}
function randomNumber(){

    let randomNumber=Math.floor(Math.random()*1000);
    console.log(randomNumber);

}
setInterval(timer,1000);



const chars=document.querySelector('.character');
const row=document.querySelector('.row');
const btn=document.querySelector('.btn');

btn.addEventListener('click',()=>{
    const div=document.createElement('div');
    const cs=document.createAttribute('class');
    cs.value="result";
    div.setAttributeNode(cs);
    const main=document.querySelector('main');
    main.appendChild(div);
    const p=document.createElement('p');
    div.appendChild(p);
    let i;
    let j;
    for(i=row.value;i>0;i--){
        for(j=0;j<i;j++){
        document.write(chars.value);
        }
        document.write("</br>");
        

    }
    
});
// const char="*";
// let i;
// for(i=6;i>0;i--){
//     for(let j=0;j<i;j++){
//         process.stdout.write(char);
//     }
//     console.log();
// }
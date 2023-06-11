function countWord(str){
    const words=str.split(" ");
    const map=new Map();
    words.forEach(word=> {
        if(map.has(word)){
            map.set(word,map.get(word)+1)
        }else{
            map.set(word,1);
        }
    });
    return map;
}
const sentences="My Name is Nigam Rai. This course is a very good course. This assignment is based on Destructuring. This course name is FSWD which is Full Stack Web Development";
console.log(countWord(sentences));
function greeting(name){
    return new Promise((resolve,reject)=>{
        resolve(name);
    })
}
greeting("Mithun").then(function fn(val){
    console.log(`Hello, ${val}`)
})
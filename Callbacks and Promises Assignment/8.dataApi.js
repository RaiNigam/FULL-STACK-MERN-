async function getData(){
    const data=await fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>{
        return response.json();
    });
    console.log(data);
}
getData();
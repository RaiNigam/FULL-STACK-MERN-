async function getData(){
    
        const data=await fetch("https://jsonplaceholder.typicode.com/posts/123456789")
        .then((response)=>{
            if(!response.ok){
                throw new Error("Network response not found");
            }
            return response.json();
        });
        console.log(data);
        

}
getData();
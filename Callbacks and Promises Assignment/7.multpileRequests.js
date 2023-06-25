async function getDatas(){
    const responseFromTodo=await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const dataOfTodo=await responseFromTodo.json();
const responseFromPost=await fetch("https://jsonplaceholder.typicode.com/posts/1");
const dataOfPost=await responseFromPost.json();
console.log({todo:dataOfTodo,post:dataOfPost});
}
getDatas();
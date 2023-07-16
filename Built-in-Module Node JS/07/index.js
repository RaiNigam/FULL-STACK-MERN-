const http=require('http');
const server=http.createServer((request,response)=>{
    if(request.url='/'){
        response.write('<h1 style="border:1px solid black">I Am Happy To Learn Full Stack Web Development From PW Skills!</h1>');
        response.end();
    }
});
server.listen(5000);
console.log(
    "The Server is running at port 5000"
);
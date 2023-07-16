import * as http from 'http';
const PORT=5000;
const server=http.createServer((request,response)=>{
    if(request.url=='/'){
        response.statusCode=200;
        response.setHeader="text/plain";
        response.end("Welcome to men & Women Dummy Data");
    }else if(request.url=='/carts'){
        const options={
            hostname:'fakestoreapi.com',
            path:'/carts',
            method:'GET',
        }
        const apiReq=http.request(options,(apiRes)=>{
            apiRes.on("data",(data)=>{
                response.statusCode=200;
                response.setHeader="application/json";
                response.end(data.toString());
            });

        });
        apiReq.on("error",()=>{
            console.log("Data not found");
        })
        apiReq.end();
        
        
    }else if(request.url=='/users'){
       const opt={
        hostname:'fakestoreapi.com',
        path:'/users',
        method:'GET'
       }
       const apiRequest=http.request(opt,(apiResponse)=>{
        apiResponse.on("data",(data)=>{
            response.statusCode=200;
            response.setHeader('Content-Type','application/json');
            response.end(data.toString());
        });
    });
        apiRequest.on("error",()=>{
            console.log("Data not found");
        });
 
        apiRequest.end();
      
    }else{
        response.statusCode=500;
        response.setHeader="text/plain";
        response.end("Page not found");
    }
});
server.listen(PORT,()=>{
    console.log(`The server is running at ${PORT}`);
});
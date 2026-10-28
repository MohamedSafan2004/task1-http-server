const http = require('http'); 
const os = require('os');

const server = http.createServer((req,res)=>
{
    res.setHeader('content-type', 'application/json')
    
if (req.url== '/' && req.method === 'GET'){
    res.statusCode = 200 ;
    res.end(JSON.stringify({message: "Welcome to the elevvo API"}))
}
else if (req.url== '/api/users' && req.method === 'GET') {
    const Users = [
        {id : "1", name:"karem",role : "dev"},
        {id : "2", name:"ali",role : "dev"}
    ];
    res.statusCode=200
    res.end(JSON.stringify(Users));
}

else if (req.url =='/api/health' && req.method=='GET') {

    res.statusCode=200
    res.end(JSON.stringify({
        status : "ok",
        uptime : process.uptime(),
        platform : os.platform(),
        timeStamp : new Date().toISOString()
    }));
}
else // Error Handle 
    {
        res.statusCode = 404;
        res.end(JSON.stringify({error : "Route not found"}))

    }    

});

// Server will listen on port 3000
const PORT = 3000
server.listen(PORT,()=>{console.log(`server is running on port : ${PORT}`)})
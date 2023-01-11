const http=require('http');

const hostname = '127.0.0.1';
const port =1337;

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
// ip는 컴퓨터를 식별하는 주소 
// port는 컴퓨터안에서 설치되어있는 여러 서버중에 어떤 서버를 사용할 건지에 대한 식별자
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello World\n');
});
server.listen(port,hostname,function(){
    console.log(`Server running at http://${hostname}:${port}/`);
}); 
var fs =require('fs');

console.log(1);
//Sync 동기적으로 파일 읽기
var data = fs.readFileSync('data.txt',{encoding:'utf8'});
console.log(data);

//Async 비동기적으로 파일 읽기
console.log(2);
fs.readFile('data.txt',{encoding:'utf-8'},function(err,data){
    console.log(3);
    console.log(data);
})
console.log(4);
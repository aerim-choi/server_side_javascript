var express = require('express');
var bodyParser=require('body-parser');

var app = express();
app.locals.pretty=true;
 // 템플릿 엔진과 express를 연결
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/template',function(req,res){ 
    res.render('temp',{time:Date(),_title:'Jade'});      //템플릿엔진의 코드에 따라서 만들어진 템플릿파일을 읽어오는 메소드render()
})                          //temp이름의 템플릿 파일을 웹페이지로 렌더링해서 사용자에게 응답한다.
app.get('/route',function(req,res){
    res.send('Hello Router,<img src="/rubberduck.jpeg">')
})
app.get('/form',function(req,res){
    res.render('form');
})
app.get('/form_receiver',function(req,res){
    var title=req.query.title;
    var description=req.query.description;
    res.send(title+","+description);
})

app.post('/form_receiver',function(req,res){
    var title =req.body.title;
    var description=req.body.description;
    res.send(title+","+description);
})
app.get('/topic/:id',function(req,res){
    var topics=[
        'Javascrpit is....',
        'Nodejs is...',
        'Express is...'
    ]
    var output = `
    <a href="/topic?id=0">JavaScrpit</a><br>
    <a href="/topic?id=1">Nodejs</a><br>
    <a href="/topic?id=2">Express</a><br><br>
    ${topics[req.params.id]}
    `
    res.send(output);
})
app.get('/topic/:id/:mode',function(req,res){
    res.send(req.params.id+','+req.params.mode)
})
app.get('/dynamic',function(req,res){
    var lis='';
    for(var i=0;i<5;i++){
        lis=lis+'<li>coding</li>';
    }
    var time=Date();
    var output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        hello,Dynamic!!
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output);

})
app.get('/',function(req, res){
    res.send('hello home page');   
});
app.get('/login',function(req, res){
    res.send('login please');   
});
app.listen(3000,function(){
    console.log("Connected 3000 port!");
})

var bodyParser=require('body-parser');
var fs =require('fs');
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.locals.pretty=true;
app.set('views','./views_file');
app.set('view engine','jade');

app.get('/topic/new',function(req,res){
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('new',{topics:files})
    })
})

// app.get('/topic',function(req,res){
//     fs.readdir('data',function(err,files){
//         if(err){
//             console.log(err);
//             res.status(500).send('Internal Server Error');
//         }
//         res.render('view',{topics:files})
//     })
// })

app.get(['/topic','/topic/:id'],function(req,res){
    
    fs.readdir('data',function(err,files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var id = req.params.id;
        if(id){
            //id 값이 있을 때
            fs.readFile('data/'+id,'utf-8',function(err,data){
                if(err){
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }
                res.render('view',{topics:files,title:id,description:data})
            })
        }
        else{
            res.render('view',{topics:files,title:'Welcome',description:'Hello, JavaScript for server.'})
        }
       
    })
})

app.post('/topic',function(req,res){
    var title = req.body.title;
    var description=req.body.description;
    fs.writeFile('data/'+title,description,function(err){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/'+title); //사용자에게 보내고 싶은 페이지
    });
   
})
app.listen(3000,function(){
    console.log("Connected,3000 port!") ;   
});




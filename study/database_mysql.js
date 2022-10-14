var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Ehdgo0320@',
  database : 'o2'
});

conn.connect();
// var sql = 'SELECT * FROM topic';
// conn.query(sql,function(err,rows,fields){
//   if(err){
//     console.log(err);
//   }else{
//     for (var i=0;i<rows.length;i++){
//       console.log(rows[i].title);
//     }
//   }

// });

// params 사용법

// var sql = 'INSERT INTO topic(title,description,author) VALUES(?,?,?)';
// var params =['Supervisor','Watcher','graphittie'];
// conn.query(sql,params,function(err,rows,fields){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(rows.insertId);
//   }
// });

//수정

// var sql = 'UPDATE topic SET title=?,author=? where id=?';
// var params =['NPM','leezche',1];
// conn.query(sql,params,function(err,rows,fields){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(rows);
//   }
// });


//삭제

var sql = 'DELETE FROM topic WHERE id=?'
var params =[1];
conn.query(sql,params,function(err,rows,fields){
  if(err){
    console.log(err);
  }else{
    console.log(rows);
  }
});
conn.end();
var mysql=require('mysql');
 var connection=mysql.createConnection({
 
host:'localhost',
 user:'root',
 password:'',
 database:'finalproject'
 
});

 module.exports=connection;
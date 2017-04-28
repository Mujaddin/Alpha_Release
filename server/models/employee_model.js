var db = require('../dbconnection');
var fs = require('fs');
var Employee ={
    getAllEmployee:function(callback){
        return db.query("select * from t_employee",callback);
    },
    getEmployeeById:function(id,callback){
        return db.query("select * from t_employee where Id=?",[id],callback);
    }
    ,
    deleteEmployee: function(id, callback){
        console.log("the id that been deleted"+id);
            return db.query("delete from t_employee where Id=?", [id],callback);
    },
    updateEmployee: function(id, Employee, callback){
        return null;
    }
    ,
    addEmployee:function(Employee,callback){
        var dt = new Date(); //current date of server
        var text="";//random text
        var possible ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i=0;i<5;i++) text +=possible.charAt(Math.floor(Math.random()*possible.length));
        // var base64d=Employee.img_employee.replace(/^data:image\/png;base64,/,"");
        // var path ="./public/images/"+text+dt.getDate()+dt.getMonth()+dt.getMilliseconds()+".png";
        // fs.writeFile(path, base64d,'base64',function(err){
        //     if(err){
        //         return console.log(err);
        //     }
        //     console.log("employee was added");
        // });
return db.query("select * from t_employee",callback);

        // return db.query(`INSERT INTO t_employee(name_last, name_first, gender, date_birth, nationality, marital, mobile_no, div_sub, div_main, grade, email) 
        // VALUES 
        // (Employee.name_last,Employee.name_first,Employee.gender,Employee.date_birth,Employee.nation,Employee.marital,Employee.mobile_no,Employee.div_sub,Employee.div_main,Employee.grade,Employee.Email)`)
    }
}
module.exports=Employee;
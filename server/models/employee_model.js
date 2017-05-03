var db = require('../dbconnection');
var fs = require('fs');

var Employee = {
    getAllEmployee: function (callback) {
        return db.query("select * from t_employee", callback);
    },
    getEmployeeById: function (id, callback) {
        return db.query("select * from t_employee where Id=?", [id], callback);
    }
    ,
    deleteEmployee: function (id, callback) {
        console.log("the id that been deleted" + id);
        return db.query("delete from t_employee where Id=?", [id], callback);
    },
    updateEmployee: function (id, Employee, callback) {
        sqlquery = ("UPDATE t_employee SET `location`='"+Employee.location+"',`firstname`='" + Employee.firstName + "',`phone`='" + Employee.phone + "',`lastname`='" + Employee.lastName + "',`division`='" + Employee.maindiv + "',`status`='" + Employee.status + "',`gender`='" + Employee.gender + "',`dob`='" + Employee.dob + "',`nation`='" + Employee.nationality + "', `grade`='" + Employee.grade + "', `maried`='" + Employee.marital + "',`subdiv`='" + Employee.subdiv + "',`imgpath`='" + Employee.imgpath + "',`email`='" + Employee.email + "',`date_susp`='" + Employee.datesusp + "',`date_hired`='" + Employee.datehire + "' WHERE id=" + id + "");
        console.log(sqlquery);
        return db.query(sqlquery, callback);
    }
    ,
    addEmployee: function (Employee, callback) {
        sqlquery = ("INSERT INTO t_employee (`firstname`,`phone`,`lastname`,`division`,`status`,`gender`,`dob`,`nation`,`grade`,`maried`,`subdiv`, `imgpath`, `email`,`datesusp`,`datehired`,location) VALUES ('" + Employee.firstName + "','" + Employee.phone + "','" + Employee.lastName + "','" + Employee.maindiv + "','" + Employee.status + "','" + Employee.gender + "','" + Employee.dob + "','" + Employee.nationality + "','" + Employee.grade + "','" + Employee.marital + "','" + Employee.subdiv + "','" + Employee.imgpath + "','" + Employee.email + "','" + Employee.datesusp + "','" + Employee.datehire + "','"+Employee.location+"')");
  console.log("add employee success");
        return db.query(sqlquery, callback);

    }, imageHandler: function (Employee) {
        console.log("image start");
        var dt = new Date();
        var uniquechar = "";
        var resors = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) uniquechar += resors.charAt(Math.floor(Math.random() * resors.length));
        var filename = uniquechar + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
        var base64d = Employee.imgpath.replace(/^data:image\/png;base64,/, "");
        var path = "./public/images/" + filename;
        var path1 = "/images/" + filename;
        fs.writeFileSync(path, base64d, 'base64', function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }

}
module.exports = Employee;
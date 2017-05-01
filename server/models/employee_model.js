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
        sqlquery = ("UPDATE t_employee SET `name_first`='" + Employee.firstname + "',`mobile_no`='" + Employee.phone + "',`name_last`='" + Employee.lastname + "',`div_main`='" + Employee.division + "',`status`='" + Employee.status + "',`gender`='" + Employee.gender + "',`date_birth`='" + Employee.dob + "',`nationality`='" + Employee.nation + "', `grade`='" + Employee.grade + "', `marital`='" + Employee.maried + "',`div_sub`='" + Employee.subdiv + "',`img_employee`='" + Employee.imgpath + "',`email`='" + Employee.email + "',`date_susp`='" + Employee.datesusp + "',`date_hired`='" + Employee.datehired + "' WHERE id=" + id + "");
        console.log(sqlquery);
        return db.query(sqlquery, callback);
    }
    ,
    addEmployee: function (Employee, callback) {
        sqlquery = ("INSERT INTO t_employee (`name_first`,`mobile_no`, `name_last`, `div_main`, `status`, `gender`, `date_birth`, `nationality`, `grade`, `marital`, `div_sub`, `img_employee`, `email`,`date_susp`,`date_hired`) VALUES ('" + Employee.firstname + "','" + Employee.phone + "','" + Employee.lastname + "','" + Employee.division + "','" + Employee.status + "','" + Employee.gender + "','" + Employee.dob + "','" + Employee.nation + "','" + Employee.grade + "','" + Employee.maried + "','" + Employee.subdiv + "','" + Employee.imgpath + "','" + Employee.email + "','" + Employee.datesusp + "','" + Employee.datehired + "')");
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
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
        sqlquery = ("UPDATE t_employee SET `name_first`='" + Employee.name_first + "',`mobile_no`='" + Employee.mobile_no + "',`name_last`='" + Employee.name_last + "',`div_main`='" + Employee.div_main + "',`status`='" + Employee.status + "',`gender`='" + Employee.gender + "',`date_birth`='" + Employee.date_birth + "',`nationality`='" + Employee.nationality + "', `grade`='" + Employee.grade + "', `marital`='" + Employee.marital + "',`div_sub`='" + Employee.div_sub + "',`img_employee`='" + Employee.img_employee + "',`email`='" + Employee.email + "' WHERE id=" + id + "");
        console.log(sqlquery);
        return db.query(sqlquery, callback);
    }
    ,
    addEmployee: function (Employee, callback) {
        sqlquery = ("INSERT INTO t_employee (`name_first`, `mobile_no`, `name_last`, `div_main`, `status`, `gender`, `date_birth`, `nationality`, `grade`, `marital`, `div_sub`, `img_employee`, `email`) VALUES ('" + Employee.name_first + "','" + Employee.mobile_no + "','" + Employee.name_last + "','" + Employee.div_main + "','" + Employee.status + "','" + Employee.gender + "','" + Employee.date_birth + "','" + Employee.nationality + "','" + Employee.grade + "','" + Employee.marital + "','" + Employee.div_sub + "','" + Employee.img_employee + "','" + Employee.email + "')");
    //    this.imageHandler(Employee); // need front frist
        return db.query(sqlquery, callback);

    }, imageHandler: function (Employee) {
        console.log("image start");
        var dt = new Date();
        var uniquechar = "";
        var resors = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) uniquechar += resors.charAt(Math.floor(Math.random() * resors.length));
        var filename = uniquechar + dt.getDate() + dt.getMonth() + dt.getMilliseconds() + ".png";
        var base64d = Employee.img_employee.replace(/^data:image\/png;base64,/, "");
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
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
        sqlquery=("UPDATE t_employee SET `name_first`="+Employee.name_first+", `mobile_no`="+Employee.mobile_no+", `name_last`="+Employee.name_last+", `div_main`="+Employee.div_main+", `status`="+Employee.status+", `gender`="+Employee.gender+", `date_birth`="+Employee.date_birth+", `nationality`="+Employee.nationality+", `grade`="+Employee.grade+", `marital`="+Employee.marital+", `div_sub`="+Employee.div_sub+", `img_employee`="+Employee.img_employee+", `email`="+Employee.email+" WHERE id=?",[id]);
        return db.query(sqlquery,callback);
    }
    ,
    addEmployee: function (Employee, callback) {
        sqlquery = ("INSERT INTO t_employee (`name_first`, `mobile_no`, `name_last`, `div_main`, `status`, `gender`, `date_birth`, `nationality`, `grade`, `marital`, `div_sub`, `img_employee`, `email`) VALUES ('" + Employee.name_first + "','" + Employee.mobile_no + "','" + Employee.name_last + "','" + Employee.div_main + "','" + Employee.status + "','" + Employee.gender + "','" + Employee.date_birth + "','" + Employee.nationality + "','" + Employee.grade + "','" + Employee.marital + "','" + Employee.div_sub + "','" + Employee.img_employee + "','" + Employee.email + "')");
        console.log(sqlquery);

        return db.query(sqlquery, callback);

    }
}
module.exports = Employee;
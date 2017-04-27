var express = require('express');
var router = express.Router();
var Employee = require('../models/employee_model');


router.get('/:id?', function (req, res, next) {
    if (req.params.id) {
        Employee.getTaskById(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Employee.getAllEmployee(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    Employee.addEmployee(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(req.body);
        }
    });
});

router.delete(':/id',function(req,res,next){
    Employee.deleteEmployee(req.params.id, function(err,count){
        if(err){
            res.json(err);
        }else{
            res.json(count);
        }
    });
});

router.put(':/id', function(req,res,next){
    Employee.updateEmployee(req.params.id, req.body,function(err,rows){
        if (err){
            res.json(err);
        }else{
            res.json(rows);
        }
    });
});

module.exports=router;
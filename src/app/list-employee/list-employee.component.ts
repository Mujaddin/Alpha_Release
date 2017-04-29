import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';

import { Employee } from '../employee/employee';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees:Employee[]=[];
  constructor(
    private _employeedata: EmployeeDataService,
 
  )
  { }

  ngOnInit() {
    this._employeedata.getAllEmployee().subscribe(

      (data: Employee[]) => {
        this.employees = data
      },
      function (error) {
        console.log(error);
        console.log("error throw");
      },
      function () {
        console.log("complete");
      });
  }

}

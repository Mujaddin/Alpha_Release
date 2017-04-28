import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee/employee';
import { EmployeeDataService } from '../service/employee-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  allEmployees: Employee[] = [];
  constructor(private _dataEmployees: EmployeeDataService, private _router: Router) { }

  ngOnInit() {
    this._dataEmployees.getAllEmployee().subscribe(
      (data: Employee[]) => {
        this.allEmployees = data;
      },
      function (error) {
        console.log(error);
      },
      function () {
        console.log("completed");
      });
  }
  addEmployee() {
    this._router.navigate(['/addEmployee']);
  }
}

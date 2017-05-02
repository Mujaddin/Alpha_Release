import { Component, OnInit, Input, Output } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { FilterPipe } from '../service/filter.pipe';
import { Employee } from '../employee/employee';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../service/observable.service';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  employeescopy: Employee[] = [];
  @Output() selectedEmployee: any = 0;
  idSelectedEmployee: number;
  employeescount: number;
  private subscription: Subscription;
  @Input('search-term')

  public term: string = null;

  constructor(
    private _employeedata: EmployeeDataService,
    private observableService: SharedService,
    private _employeeService: EmployeeService,
  ) { }


  getAllEmployee() {
    this.service(this._employeedata.getAllEmployee());

  }

  ngOnInit() {
    this.getAllEmployee();
  }

  onSelectEmployee(item: Employee) {
    this.selectedEmployee = item;
    this._employeeService.setSelectedEmployee(item);


  }

  onEditData(item: Employee) {
    this._employeedata.editEmployeeWithId(item)
      .then(() => this.getAllEmployee());
  }

  onSaveData(item: Employee) {
    this._employeedata.addEmployee(item)
      .then(() => this.getAllEmployee());
  }

  onDeleteData(item: Employee) {
    this._employeedata.deleteEmployeeWithId(item)
      .then(() => this.getAllEmployee());
  }

  search(term: string) {
    this._employeedata.getAllEmployee()
      .then(employees => this.employees = employees)
      .then(() => this.employees = Object.assign([], this.employees)
        .filter(employees => (employees.firstname + " " + employees.lastname).toLowerCase().indexOf(term) >= 0))
      .then(() => this.employeescount = this.employees.length);

  }
  service(emp) {
    emp.then(employees => this.employees = employees)
      .then(() => this.employeescount = this.employees.length);
  }


}

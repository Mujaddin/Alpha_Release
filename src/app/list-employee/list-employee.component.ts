import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { FilterPipe } from '../service/filter.pipe';
import { Employee } from '../employee/employee';
import { Subscription } from 'rxjs/Subscription';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  employeescopy: Employee[] = [];
  selectedEmployee: any = 0;
  idSelectedEmployee: number;
  employeescount: number;
  sortAsc: boolean;
  private subscription: Subscription;

  @Input('search-term')
  public term: string = null;

  constructor(
    private _employeedata: EmployeeDataService,
    private _employeeService: EmployeeService,
  ) { this.sortAsc = true; }


  getAllEmployee() {
    this.service(this._employeedata.getAllEmployee());

  }

  ngOnInit() {
    this.getAllEmployee();
  }

  // sort(): void {
  //   console.log('sort');
  //   let last = -1;
  //   let first = 1;

  //   if (!this.sortAsc) {
  //     last = 1;
  //     first = -1;
  //   }

  //   this.employees.sort((a, b) => {
  //     if (a.lastname < b.lastname) return first;
  //     if (a.lastname > b.lastname) return last;
  //     return 0;
  //   });
  //   this.selectedEmployee = this.employees[0];
  //   this.sortAsc = !this.sortAsc;
  // }
  onSelectEmployee(item: any) {
    this.selectedEmployee = item;
    this.idSelectedEmployee == item.id;
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

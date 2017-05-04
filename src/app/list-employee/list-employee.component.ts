import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { MdDialog, MdSnackBar } from '@angular/material';

import{DialogContent} from '../dialog-delete.component';
import { DialogFilterComponent } from '../dialog-filter.component';
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
  nullEmp:any;
  selectedEmployee: any = 0;
  idSelectedEmployee: number;
  employeescount: number;
  deleteState: boolean = true;
  sortAsc: boolean;
  private subscription: Subscription;
  @Input() createNew:any;
  @Input('search-term')
  public term: string = null;

  constructor(
    private _employeedata: EmployeeDataService,
    private _employeeService: EmployeeService,
    private dialog: MdDialog,
    private snackbar: MdSnackBar) { this.sortAsc = true; }


  getAllEmployee() {
    this.service(this._employeedata.getAllEmployee());
  }

  ngOnInit() {
    this.getAllEmployee();
    this._employeeService.notifyStream$.subscribe(response => {
      if (response.hasOwnProperty('option') && response.option == 'submit') {
        this.search("");
             console.log("Berhasil2");
        this.deleteState = true;
      }
    });
  }

  sort(): void {
    console.log('sort');
    let last = -1;
    let first = 1;

    if (!this.sortAsc) {
      last = 1;
      first = -1;
    }

    this.employees.sort((a, b) => {
      if (a.lastname < b.lastname) return first;
      if (a.lastname > b.lastname) return last;
      return 0;
    });
    this.selectedEmployee = this.employees[0];
    this.sortAsc = !this.sortAsc;
  }
  onSelectEmployee(item: any) {
    this.selectedEmployee = item;
    this.idSelectedEmployee = item.id;
    this._employeeService.setSelectedEmployee(item);
    console.log(item);
    this.deleteState = false;
  }

newEmployee(){
  var newEmp=new Employee(100,"","","",null,"",null,null,"","","","","","","","","");

  this._employeeService.setSelectedEmployee(newEmp);
}

  onDeleteData(id: number) {
    this._employeedata.deleteEmployeeWithId(id)
      .then(() => this.getAllEmployee());
  }
  //service selain CRUD
  delete() {
    this.onDeleteData(this.idSelectedEmployee);
    this.idSelectedEmployee = undefined;
    this.deleteState = true;
    this.search("");
  }

openDelete(){
   let dialogRef = this.dialog.open(DialogContent);
    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.delete();
      }
    });
}
  openFilter() {
    let dialogRef = this.dialog.open(DialogFilterComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.filterDo(result);
    });
  }

  filterDo(params: any) {
    if (params) {
      if (params.gender === 'all') {
        if (params.location !== 'all') {
          this.employees = this.employeescopy.filter(employees => employees.location === params.location);
          this.employeescount = this.employees.length;
        } else {
          this.employees = this.employeescopy;
          this.employeescount = this.employees.length;
        }
      } else {
        if (params.location !== 'all') {
          this.employees = this.employeescopy.filter(employees => employees.gender === params.gender && employees.location === params.location);
          this.employeescount = this.employees.length;
        } else {
          this.employees = this.employeescopy.filter(employees => employees.gender === params.gender);
          this.employeescount = this.employees.length;
        }
      }
    }
  }

refresh(){
  this.search("");
this.idSelectedEmployee=undefined;

}

  search(term: string) {
    this._employeedata.getAllEmployee()
      .then(employees => this.employees = employees)
      .then(() => this.employees = Object.assign([], this.employees)
        .filter(employees => (employees.firstname + " " + employees.lastname).toLowerCase().indexOf(term) >= 0))
      .then(() => this.employeescopy = this.employees)
      .then(() => this.employeescount = this.employees.length);
       console.log("search berhasil");  
  }

  service(emp) {
    emp.then(employees => this.employees = employees)
      .then(() => this.employeescopy = this.employees)
      .then(() => this.employeescount = this.employees.length);
  }


}


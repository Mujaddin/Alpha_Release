import { Component, OnInit, Input } from '@angular/core';
import { EmployeeDataService } from '../service/employee-data.service';
import { FilterPipe } from '../service/filter.pipe';
import { Employee } from '../employee/employee';
import { Subscription } from 'rxjs/Subscription';
import { SharedService } from '../service/observable.service'
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
  private subscription: Subscription;
  @Input('search-term')
  public term: string = null;

  constructor(
    private _employeedata: EmployeeDataService,
    private observableService: SharedService,
  ) { }


  getAllEmployee() {
    this.service(this._employeedata.getAllEmployee());
   
  }

  ngOnInit() {
    this.getAllEmployee();
  }

  onSelectEmployee(item: any) {
    this.selectedEmployee = item;
    this.idSelectedEmployee == item.id;
  }

  onEditData(item: Employee) {
    this._employeedata.editEmployeeWithId(item)
      .then(() => this.getAllEmployee());
  }

  onSaveData(item: Employee) {
    this._employeedata.addEmployee(item)
    .then(()=>this.getAllEmployee());
   }

   onDeleteData(item:Employee){
     this._employeedata.deleteEmployeeWithId(item)
     .then(()=>this.getAllEmployee());
   }

search(term:string){
  this._employeedata.getAllEmployee()
  .then(employees=>this.employeescopy=employees)
  .then(()=>this.employees=Object.assign([],this.employeescopy)
  .filter(employees=>employees.name.toLowerCase().indexOf(term)>=0))
  .then(()=>this.employeescount=this.employees.length);
}
  service(emp) {
    emp.then(employees => this.employees = employees)
      .then(() => this.employeescount = this.employees.length);
  }
 

}

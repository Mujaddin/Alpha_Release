import { Injectable, OnInit } from '@angular/core';
import { Employee } from "../employee/employee";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { EmployeeDataService } from '../service/employee-data.service';



@Injectable()
export class EmployeeService implements OnInit {
    selectedEmployee: Employee;
    subjectSelectedEmployee: Subject<Employee> = new Subject<Employee>();
    subjectChange: Subject<boolean> = new Subject<boolean>();
    constructor(private _employeedata: EmployeeDataService) { }
    ngOnInit() { }

    setSelectedEmployee(e: Employee) {
        console.log("set selected emp", e);
        if (e) {
            this._employeedata.getEmployeeWithId(e.id).then(result => {
                this.selectedEmployee = result;
                this.subjectSelectedEmployee.next(result);
            });
        } else {
            this.selectedEmployee = e;
            this.subjectSelectedEmployee.next(e);
        }


    }

    getSelectedEmployee(): Observable<Employee> {
        return this.subjectSelectedEmployee.asObservable();
    }
}

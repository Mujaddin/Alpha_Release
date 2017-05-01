import { Injectable } from '@angular/core';
import { Employee } from "../employee/employee";

@Injectable()
export class EmployeeService {
    showForm = false;
    selectedEmployee;
	locations;
}

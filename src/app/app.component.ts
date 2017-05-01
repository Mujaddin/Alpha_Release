import { Component } from '@angular/core';
import { EmployeeDataService } from "app/service/employee-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private _employeedata: EmployeeDataService,
}

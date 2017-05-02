import { Component, Input, Output, OnInit } from '@angular/core';
import { EmployeeDataService } from "app/service/employee-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() employeeListId: any;
  @Output() employeeSelected: any;
  title = 'app works!';
  constructor() {

  }
  ngOnInit(): void {
    if (this.employeeListId) {
      this.employeeSelected = this.employeeSelected;
    }
  }
}

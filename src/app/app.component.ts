import { Component, Input, Output, OnInit } from '@angular/core';
import { EmployeeDataService } from "app/service/employee-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() changeEmpoyee: any;
  @Output() createNew: any;
  title = 'app works!';
  constructor() {

  }

  ngOnInit(): void {

  }

  onAddNew() {

  }

  onChangeEmployee() {
    this.changeEmpoyee = true;
  }
}

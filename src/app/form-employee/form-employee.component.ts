import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import{Validators,FormBuilder,FormControl,ReactiveFormsModule,FormGroup} from'@angular/forms';
import{Employee}from '../employee/employee'
@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
formEmployee;
 foods = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];
  constructor() { }

  ngOnInit() {
    this.formEmployee= new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      dob:new FormControl(''),
      nationality:new FormControl(''),
      phone:new FormControl(''),
      marital: new FormControl(''),
      email:new FormControl(''),
      subdiv:new FormControl(''),
      status:new FormControl(''),
      datesusp:new FormControl(''),
      datehire:new FormControl(''),
      grade:new FormControl(''),
      maindiv: new FormControl(''),
      location:new FormControl(''),
       });
  }

}

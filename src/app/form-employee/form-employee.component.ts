import { Component, OnInit } from '@angular/core';
import{Validators,FormBuilder,FormControl,ReactiveFormsModule,FormGroup} from'@angular/forms';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
formEmployee;
  constructor() { }

  ngOnInit() {
    this.formEmployee= new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      dob:new FormControl(''),
      nationality:new FormControl(''),
      phone:new FormControl(''),
      email:new FormControl(''),
      
    });
  }

}

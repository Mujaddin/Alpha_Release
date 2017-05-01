import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Employee } from '../employee/employee';
import { EmployeeDataService } from '../service/employee-data.service';


@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.css']
})
export class FormEmployeeComponent implements OnInit {
  @Input() emp: any;
  @Output() save = new EventEmitter();
  @Output() update = new EventEmitter();
  @Output() delete = new EventEmitter();


  formEmployee;
  formNew: FormGroup;

  fileList: FileList;
  deletState: boolean;
  imgSelect: string;



  foods = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }
  ];
  constructor(private formNewBuilder: FormBuilder,
    private _employeeData: EmployeeDataService,
  ) { }

  ngOnInit() {
    this.fileList = null,
      this.formEmployee = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        dob: new FormControl(''),
        nationality: new FormControl(''),
        phone: new FormControl(''),
        marital: new FormControl(''),
        email: new FormControl(''),
        subdiv: new FormControl(''),
        status: new FormControl(''),
        datesusp: new FormControl(''),
        datehire: new FormControl(''),
        grade: new FormControl(''),
        maindiv: new FormControl(''),
        location: new FormControl(''),
      });
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  onSave(emp: Employee) {
    this.save.emit(emp);
  }

}

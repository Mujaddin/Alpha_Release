import { Component, OnInit, ChangeDetectorRef, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { Employee } from '../employee/employee';
import { EmployeeDataService } from '../service/employee-data.service';

import { EmployeeService } from '../service/employee.service';


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


  formEmployee: FormGroup;
  formNew: FormGroup;
  fileList: FileList;
  deletState: boolean;
  imgSelect: string;
  selectEmployee: number;


  gender = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' }
  ];

  location = [
    { value: 'bali', viewValue: 'Bali' },
    { value: 'yogyakarta', viewValue: 'Yogyakarta' },
    { value: 'bandung', viewValue: 'Bandung' },
    { value: 'jakarta', viewValue: 'Jakarta' },
  ];

  division = [
    { value: 'swd-red', viewValue: 'SWD-RED' },
    { value: 'CDC AsteRx', viewValue: 'CDC ASTERIX' },
    { value: 'Services', viewValue: 'Services' },
    { value: 'SWD-BLUE', viewValue: 'SWD-BLUE' },
    { value: 'SWD-GREEN', viewValue: 'SWD-GREEN' },
  ];

  constructor(private formNewBuilder: FormBuilder,
    private _employeeData: EmployeeDataService, private _sharedService: EmployeeService,
  ) { }

  ngOnInit() {
    this.fileList = null;
    console.log("masuk" + this.emp);
    this.formMake(this.emp);
    this.selectedEmployee();
  }


  formMake(e: Employee) {

    if (e) {
      this.imgSelect = e.imgpath;
      this.formEmployee = new FormGroup({
        firstName: new FormControl(e.firstname),
        lastName: new FormControl(e.lastname),
        dob: new FormControl(e.dob),
        nationality: new FormControl(e.nation),
        phone: new FormControl(e.phone),
        marital: new FormControl(e.maried),
        email: new FormControl(e.email),
        subdiv: new FormControl(e.subdiv),
        status: new FormControl(e.status),
        datesusp: new FormControl(""),
        datehire: new FormControl(e.datehired),
        grade: new FormControl(e.grade),
        gender: new FormControl(e.gender),
        maindiv: new FormControl(e.division),
        location: new FormControl(e.location),
        imgpath: new FormControl(e.imgpath)
      });
    } else {
      this.imgSelect = "../../assets/unknown.jpg"
      this.formEmployee = new FormGroup({
        firstName: new FormControl('', Validators.compose([Validators.required])),
        lastName: new FormControl(''),
        dob: new FormControl(''),
        nationality: new FormControl(''),
        phone: new FormControl('+'),
        marital: new FormControl(''),
        email: new FormControl(''),
        subdiv: new FormControl(' '),
        status: new FormControl(''),
        datesusp: new FormControl(''),
        datehire: new FormControl(''),
        grade: new FormControl(''),
        gender: new FormControl(''),
        maindiv: new FormControl(''),
        location: new FormControl(''),
        imgpath: new FormControl("")
      });
    }


  }

  ngOnChanges() {
    if (this.emp != undefined) {
      this.imgSelect = this.emp.imgpath;
      this.formEmployee.setValue({
        firstName: this.emp.firstname,
        lastName: this.emp.lastname,
        dob: this.emp.dob,
        nationality: this.emp.nation,
        phone: this.emp.phone,
        marital: this.emp.marital,
        email: this.emp.email,
        subdiv: this.emp.subdiv,
        status: this.emp.status,
        datesusp: " ",
        datehire: this.emp.datehired,
        grade: this.emp.grade,
        maindiv: this.emp.division,
        location: this.emp.location,
        gender: this.emp.gender,
        imgpath: this.imgSelect
      });
    }
  }

  onSave(emp: Employee) {
    console.log(emp);
     if (this.selectEmployee) {
      console.log("jamal  ",this.selectEmployee)
      this._employeeData.editEmployeeWithId(emp, this.selectEmployee);
    } else {
      this._employeeData.deleteEmployeeWithId(this.selectEmployee)
      this._employeeData.addEmployee(emp);
    }
    this._sharedService.notifyOtherComponent({ option: 'submit', value: 'add' });
  }

  imageProcessing(photo) {
    var readImage = new FileReader();
    readImage.onload = (photo: any) => { this.imgSelect = photo.target.result; }
    readImage.readAsDataURL(photo.target.files[0]);
  }

  selectedEmployee() {
    this._sharedService.getSelectedEmployee().subscribe(
      emp => {
        this.emp = emp;
        this.formMake(emp[0])
        this.selectedEmployee = emp[0].id;
      }
    );
  }


}

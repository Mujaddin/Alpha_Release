import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Validators, FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import{MdlModule} from '@angular-mdl/core';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Md2DatepickerModule }  from 'md2-datepicker';

import { AppComponent } from './app.component';
import {EmployeeDataService} from './service/employee-data.service';


import { EmployeesComponent } from './employees/employees.component';
import { FilterPipe } from './service/filter.pipe';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    FilterPipe,
    ListEmployeeComponent,
    FormEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdlModule, 
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    Md2DatepickerModule.forRoot(),
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

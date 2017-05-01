import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Md2DatepickerModule } from 'md2-datepicker';

import { AppComponent } from './app.component';
import { EmployeeDataService } from './service/employee-data.service';

import { EmployeeRouting } from './service/employee.routing'
import { FilterPipe } from './service/filter.pipe';
import { SharedService } from './service/observable.service';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FormEmployeeComponent } from './form-employee/form-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ListEmployeeComponent,
    FormEmployeeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    MdlModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Md2DatepickerModule.forRoot(),
  ],
  providers: [EmployeeDataService, SharedService, EmployeeRouting],
  bootstrap: [AppComponent]
})
export class AppModule { }

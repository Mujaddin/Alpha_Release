import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdlModule } from '@angular-mdl/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Md2DatepickerRootModule } from 'md2-datepicker';

import { AppComponent } from './app.component';
import { EmployeeDataService } from './service/employee-data.service';

import { Ng2OrderModule } from 'ng2-order-pipe';
import{EmployeeService} from './service/employee.service';
import { EmployeeRouting } from './service/employee.routing';
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
    Ng2OrderModule,
    HttpModule,
    MdlModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Md2DatepickerRootModule,
  ],
  providers: [EmployeeDataService, SharedService, EmployeeRouting,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MdSelectModule, MdCheckbox,MdListModule,MdButtonModule,MdInputModule,MdTabsModule} from '@angular/material';
import{FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import {EmployeeDataService} from './service/employee-data.service';

import{BtnComponent}from './btn/btn.component';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MdSelectModule, MdCheckbox,MdListModule,MdButtonModule,MdInputModule,MdTabsModule} from '@angular/material';
import{FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';

import{BtnComponent}from './btn/btn.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

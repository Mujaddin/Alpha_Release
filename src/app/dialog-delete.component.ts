import { Component, OnInit, Optional } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  template: ` <p>     Do you want to delete this employee data? 
  You cannot redo this service yet  </p>
    <p> <button md-button (click)="dialogRef.close(true)">YES</button>
     <button md-button (click)="dialogRef.close(false)">NO</button> </p>
  `,
})
export class DialogContent {
  constructor(@Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}
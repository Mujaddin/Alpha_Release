import { Component, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'app-dialog',
    template: `<p><b>Select the filter</b></p>
<form [formGroup]="formFilter">
    <table cellspacing="14">
        <tr>
            <td>Gender:</td>
            <td>
                <select name="gender" formControlName="gender">
    <option value="all"> All </option>
    <option value= "Female"> Female </option>
    <option value= "Male"> Male </option>
    </select>
            </td>
        </tr>
        <tr>
            <td>Location:</td>
            <td>
                <select name="location" formControlName="location">
    <option value="all"> All </option>
    <option value= "bandung"> Bandung </option>
    <option value= "jakarta"> Jakarta </option>
    <option value= "bali"> Bali </option>
    <option value= "yogyakarta"> Yogyakarta </option>
    </select>
            </td>
        </tr>
    </table>
    <button md-raised-button color="green" (click)="dialogRef.close(formFilter.value)"> Filter </button>
</form>`
})
export class DialogFilterComponent {
    formFilter: FormGroup;

    constructor(
        @Optional() public dialogRef: MdDialogRef<DialogFilterComponent>,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.formFilter = this.formBuilder.group({
            gender: this.formBuilder.control('all'),
            location: this.formBuilder.control('all')
        });
    }
}
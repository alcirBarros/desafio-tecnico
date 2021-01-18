import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [FormComponent],
  imports: [ 
    CommonModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [FormComponent]
})
export class FormModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboboxComponent } from './combobox.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ComboboxComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[
  ],
  exports:[
    ComboboxComponent
  ]
})
export class ComboBoxModule { }

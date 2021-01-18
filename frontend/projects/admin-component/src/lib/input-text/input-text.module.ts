import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputText } from './input-text.component';


@NgModule({
  declarations: [InputText],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[

  ],
  exports: [InputText]
})
export class InputTextModule { }

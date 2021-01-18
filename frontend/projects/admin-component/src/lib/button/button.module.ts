import { ButtonComponent } from './button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule
  ],
  providers:[
  ],
  exports:[
    ButtonComponent
  ]
})
export class CommandButtonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordinputComponent } from './password-input.component';


@NgModule({
  declarations: [PasswordinputComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers:[

  ],
  exports: [PasswordinputComponent]
})
export class PasswordInputModule { }

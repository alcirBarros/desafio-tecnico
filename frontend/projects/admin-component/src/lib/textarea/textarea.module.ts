import { FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TextareaComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[TextareaComponent]
})
export class TextareaModule { }

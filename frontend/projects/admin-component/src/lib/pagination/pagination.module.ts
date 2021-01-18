import { PaginationComponent } from './pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    FormModule
  ],
  providers:[
  ],
  exports:[
    PaginationComponent
  ]
})
export class PaginationModule { }

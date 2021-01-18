import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form.component';
import { UserFormRoutingModule } from './user-form-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'projects/admin-component/src/lib/input-text/input-text.module';
import { CommandButtonModule } from 'projects/admin-component/src/lib/button/button.module';
import { ComboBoxModule } from 'projects/admin-component/src/lib/combobox/combobox.module';
import { FormModule } from 'projects/admin-component/src/lib/form/form.module';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    UserFormRoutingModule,
    ReactiveFormsModule,
    FormModule, 
    InputTextModule,
    CommandButtonModule,
    ComboBoxModule
  ],
  providers:[
  ]
})
export class UserFormModule { }

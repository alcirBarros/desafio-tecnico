import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { CommandButtonModule } from 'projects/admin-component/src/lib/button/button.module';
import { InputTextModule } from 'projects/admin-component/src/lib/input-text/input-text.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComboBoxModule } from 'projects/admin-component/src/lib/combobox/combobox.module';
import { FormModule } from 'projects/admin-component/src/lib/form/form.module';

import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { PaginationModule } from 'projects/admin-component/src/lib/pagination/pagination.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    FormsModule,      
    UserListRoutingModule,
    ReactiveFormsModule,
    GridAllModule, 
    SwitchModule,
    FormModule, 
    InputTextModule,
    CommandButtonModule,
    ComboBoxModule,
    PaginationModule
  ],
  providers:[
  ]
})
export class UserListModule { }

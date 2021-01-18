import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./vehicle-list/user-list.module').then(m => m.UserListModule) },
  { path: 'new', loadChildren: () => import('./vehicle-form/user-form.module').then(m => m.UserFormModule) },
  { path: 'edit', loadChildren: () => import('./vehicle-form/user-form.module').then(m => m.UserFormModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

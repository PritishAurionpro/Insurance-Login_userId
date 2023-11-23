import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "createadmin",
    component: CreateAdminComponent
  },
  {
    path: "createemployee",
    component: CreateAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


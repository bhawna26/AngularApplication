import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorcomponentComponent } from './errorcomponent/errorcomponent.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent},
  {path:'todos',component:ListTodosComponent},
  //errorcomponent.It should be at the last.
  {path:'**',component:ErrorcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

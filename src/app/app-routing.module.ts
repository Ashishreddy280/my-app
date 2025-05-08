import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [{path:'home',component:HomeComponent},
  {path:'dashboard', component:DashboradComponent,children:[{ path:'login',component:LoginComponent}]},
 
 {path:'services',component:ServicesComponent},
 {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

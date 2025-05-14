import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { MailComponent } from './mail/mail.component';


const routes: Routes = [{path:'parent',component:ParentComponent, children:[{path:'welcome', component:WelcomeComponent},{path:'home', component:HomeComponent},
  {path:'calculator', component:CalculatorComponent},
  {path:'rectangle', component:RectangleComponent},
  {path:'circle', component:CircleComponent},
  {path:'bmi', component:BmiComponent},{path:'data-binding', component:DataBindingComponent}
,{path:'directives', component:DirectivesComponent},
{path:'vehicles', component:VehiclesComponent},{path:'flipkart', component:FlipkartComponent},
{path:'mail', component:MailComponent}]},


  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

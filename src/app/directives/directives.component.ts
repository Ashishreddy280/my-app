import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  ages:number[]=[21,32,34,45,56,77,86,99,24];
  states:string[]=["telangana",'andhra','tamilnadu','bengal','orrisa']

  products:any[]=[{name:'pen',price:'20',rating:2.6},
    {name:'book',price:'200',rating:3.6},
    {name:'bike',price:'10000',rating:5.0},
    {name:'car',price:'100000',rating:4.5},
    {name:'laptop',price:'50000',rating:3.8},
    {name:'jacket',price:'4000',rating:1},

  ]


}

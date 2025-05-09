import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent {
  height:number=0;
  weight:number=0;
  sum:number=0;
  calculate(){this.sum=this.weight/(this.height*this.height)}
  




}

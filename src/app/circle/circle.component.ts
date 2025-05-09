import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {
  radius:number=0;
  sum:number=0;
  area(){this.sum=Math.PI*this.radius*this.radius}
  perimeter(){this.sum=2*Math.PI*this.radius}


  }

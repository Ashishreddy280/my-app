import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  greet(){alert("good morning")}
  typing(){alert("typing..........")}
  state(){alert("state")}

  name:string="my name is Ashish";
  isdisabled:boolean=true;
  guy:string="Namasthe!"

  mobile:string="+91";
  submit(){alert(this.mobile);}

  num1:number=0;
  num2:number=0;
  sum:number=0;
  calculate(){this.sum=this.num1+this.num2;}


}

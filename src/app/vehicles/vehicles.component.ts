import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent { 
  vehicles:any=[]
  constructor(private vehicleservice:VehiclesService)
  { vehicleservice.getvehicles().subscribe((data:any)=>{
    this.vehicles=data
    console.log(this.vehicles);
  
  },
(err:any)=>{alert("Internal service Error")})
    
  }

}

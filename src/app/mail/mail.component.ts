import { Component } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {
 mail:any=[]
     constructor(private mailservice:MailService)
     { mailservice.getmailservice().subscribe((data:any)=>{
       this.mail=data
       console.log(this.mail);
     
     },
   (err:any)=>{alert("Internal service Error")})
       
     }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {

  constructor(private http:HttpClient
  ) { } getflipkart():Observable<any>{ return this.http.get("https://fakestoreapi.com/products")
  }

}
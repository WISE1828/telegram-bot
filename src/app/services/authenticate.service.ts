import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  statusCodeCheck = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }

  getRequest() {
    return this.http.get('auth/Gipsy_finance', 
      {observe: "response"})
    }   
  
  authenticate() {
    timer(0).subscribe(()=>{
      this.getRequest()
      .subscribe({error: (res)=>{
        if(res.status === 200)
          this.statusCodeCheck.next(true)
      }})
    }) 
  }
}

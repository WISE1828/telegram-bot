import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { environment } from '../../environments/environment';
import { TelegramService } from './telegram.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  telegram = inject(TelegramService)

  statusCodeCheck = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }

  getRequest() {
    return this.http.get(`auth/${this.telegram.tg?.initDataUnsafe?.user?.username}`, 
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

// return this.http.get(`auth/${this.telegram.tg?.initDataUnsafe?.user?.username}`,
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { TelegramService } from '../services/telegram.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-log-btn',
  templateUrl: './log-btn.component.html',
  styleUrl: './log-btn.component.css',
  template: '<app-log-btn [statusCodeCheck] = "statusCodeCheck"></app-log-btn>'
  
})

export class LogBtnComponent {
  check  = true
  preLogin = '@'
  telegram_id = ' '
  statusCode = 0

  telegram = inject(TelegramService)
  
  constructor(private http: HttpClient) { 
    
  }

  getID() {
    this.check = false
    this.telegram_id = this.telegram.tg?.initDataUnsafe?.user.username    
  }

  authenticate() {
    this.getRequest()
    .subscribe({
      next: (res) => {
         this.statusCode = res.status
        
      },
      error: (err) => {
        this.statusCode = err.status.toString()
      }
    })
  }
  getRequest() {
    return this.http.get('http://127.0.0.1:8086/check', {observe: 'response'})
  }
}

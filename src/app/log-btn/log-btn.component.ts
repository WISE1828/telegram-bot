import { Component, inject } from '@angular/core';
import { TelegramService } from '../services/telegram.service';
import { HttpClient } from '@angular/common/http';
import { AuthenticateService } from '../services/authenticate.service';


@Component({
  selector: 'app-log-btn',
  templateUrl: './log-btn.component.html',
  styleUrl: './log-btn.component.css',
  
})

export class LogBtnComponent {
  check  = true
  preLogin = '@'
  telegram_id = ' '

  telegram = inject(TelegramService)
  authService = inject(AuthenticateService)
  
  constructor(private http: HttpClient) { 
    
  }

  getID() {
    this.authService.authenticate()   
    this.check = false
    this.telegram_id = this.telegram.tg?.initDataUnsafe?.user.username
     
  }

  

  // authenticateSucsses(){
  //   this.statusCodeCheck
  // }
}

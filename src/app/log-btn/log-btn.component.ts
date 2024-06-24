import { Component, inject } from '@angular/core';
import { TelegramService } from '../services/telegram.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-log-btn',
  templateUrl: './log-btn.component.html',
  styleUrl: './log-btn.component.css',
  
})

export class LogBtnComponent {
  request = 'Ничего'
  response: any
  telegram_id = 'Ничего'

  telegram = inject(TelegramService)
  
  constructor(private http: HttpClient) { 
    
  }

  getID() {
    this.telegram_id = this.telegram.tg?.initDataUnsafe?.user.username    
  }

  getRequest() {
    this.http.get('https://www.google.ru/?hl=ru')
    .subscribe((response) => {      
      console.log(response)
    })
    
    
  }
}

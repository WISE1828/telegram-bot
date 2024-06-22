import { Component, inject } from '@angular/core';
import { TelegramService } from '../services/telegram.service';


@Component({
  selector: 'app-log-btn',
  templateUrl: './log-btn.component.html',
  styleUrl: './log-btn.component.css',
  
})

export class LogBtnComponent {
  telegram_id = "asd"
  telegram = inject(TelegramService)
  
  constructor() { 
    // this.id =  this.telegram.initData.id();
    this.telegram?.MainButton?.show();
  }

  getID() {
    // this.telegram_id = this.telegram.tg?.initDataUnsafe?.user.id    
    return this.telegram_id = "dsadas"
  }
}

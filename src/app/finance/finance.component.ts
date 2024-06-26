import { Component,OnInit,inject } from '@angular/core';
import { TelegramService } from '../services/telegram.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent implements OnInit {
  telegram = inject(TelegramService)
  preLogin = '@'
  telegram_id = " "
  telegram_first_name = " "
  telegram_last_name = " "
  telegram_photo_url = " "
  

  constructor(){

  }

  ngOnInit(): void {
    this.telegram_id = this.telegram.tg?.initDataUnsafe?.user.username
    this.telegram_first_name = this.telegram.tg?.initDataUnsafe?.user.first_name
    this.telegram_last_name = this.telegram.tg?.initDataUnsafe?.user.last_name
    this.telegram_photo_url = this.telegram.tg?.initDataUnsafe?.user.photo_url
  }
}

import {Component,OnInit,inject } from '@angular/core';
import { TelegramService } from '../services/telegram.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit {
  telegram = inject(TelegramService)
  telegram_photo_url = " "
  check = 0
  burgerCheck = false

  constructor(){

  }
  

  menuOpenUser(){
    this.check = 0
    this.burgerCheck = false
  }

  menuOpenFinance(){
    this.check = 2
    this.burgerCheck = false
  }

  ngOnInit(): void {
    this.telegram_photo_url = this.telegram.tg?.initDataUnsafe?.user.photo_url
  }



  
  
}

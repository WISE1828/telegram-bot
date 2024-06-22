import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

interface TgButton {
  show(): void
  hide(): void

}

@Injectable({
  providedIn: 'root'
})

export class TelegramService {
  private window;
  tg: any;

  constructor(@Inject(DOCUMENT) private _document: any) { 
    this.window = this._document.defaultView; 
    this.tg = this.window?.Telegram?.WebApp
  }

  // get initData(): UserData {
  //   return this.tg?.initDataUnsafe
  // }

  get MainButton(): TgButton {
    return this.tg?.MainButton;
  }
}

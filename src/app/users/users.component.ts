import { Component,OnInit,inject, signal } from '@angular/core';
import { TelegramService } from '../services/telegram.service';
import { Division, RequestService, User } from '../services/request.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  telegram = inject(TelegramService)
  request = inject(RequestService)

  divisions$!:Observable<Division[]>
  users$!:Observable<User[]>

  preLogin = '@'
  telegram_id = " "
  telegram_first_name = " "
  telegram_last_name = " "
  telegram_photo_url = " "
  check = signal(0)
  modalCheck = 0

  constructor(){ }

  menuOpenUser(){
    this.check.set(0)
  }

  menuOpenStats(){
    this.check.set(2)
  }

  openModal(){
    this.modalCheck = 3
  }

  changeName(id: number, name: string){
    this.request.patchDivision(id, name)
    .subscribe(()=>{
      this.divisions$ = this.request.getDivision()
    })
  }

  divisionDelete(value: number){
    this.request.deleteDivision(value).subscribe({error: (res)=>{
      if(res.status === 200)
        this.divisions$ = this.request.getDivision()
    }})
  }

  userDelete(value: number){
    this.request.deleteUser(value).subscribe({error: (res)=>{
      if(res.status === 200)
        this.users$ = this.request.getUsers()
    }})
  }

  
  updateUsers(value: boolean){
    this.modalCheck = 0
    if(!value){
      return
    }
    this.users$ = this.request.getUsers()
  }

  ngOnInit(): void {
    this.divisions$ = this.request.getDivision()
    this.users$ = this.request.getUsers()

    this.telegram_id = this.telegram.tg?.initDataUnsafe?.user?.username
    this.telegram_first_name = this.telegram.tg?.initDataUnsafe?.user?.first_name
    this.telegram_last_name = this.telegram.tg?.initDataUnsafe?.user?.last_name
    this.telegram_photo_url = this.telegram.tg?.initDataUnsafe?.user?.photo_url
  }
}

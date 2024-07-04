import { Component,OnInit,inject } from '@angular/core';
import { TelegramService } from '../services/telegram.service';
import { RequestService, Tools } from '../services/request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css'
})
export class FinanceComponent implements OnInit {
  request = inject(RequestService)

  tools$!:Observable<Tools[]>
  
  modalCheck = 0

  constructor(){}

  openModal(){
    this.modalCheck = 3
  }

  changeToolName(id: number, name: string){
    this.request.patchTools(id, name).subscribe({error: (res)=>{
      if(res.status === 201)
        this.tools$ = this.request.getTools()
    }})
  }

  updateTools(value: boolean){
    this.modalCheck = 0
    if(!value){
      return
    }
    this.tools$ = this.request.getTools()
  }

  servicerDelete(value: number){
    this.request.deleteServices(value).subscribe({error: (res)=>{
      if(res.status === 200)
        this.tools$ = this.request.getTools()
    }})
  }

  ngOnInit(): void {
    this.tools$ = this.request.getTools()
  }
}

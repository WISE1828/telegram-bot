import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-modal-finance',
  templateUrl: './modal-finance.component.html',
  styleUrl: './modal-finance.component.css'
})
export class ModalFinanceComponent {
  request = inject(RequestService)
  
  @Output()
  modalClose = new EventEmitter<boolean>() 

  createTool(value: string){
    this.request.addTools(value).subscribe({error: (res)=>{
        if(res.status === 201)
          this.modalClose.emit(true)
      }})
  }
}

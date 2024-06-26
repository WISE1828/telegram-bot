import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  request = inject(RequestService)
  
  @Output()
  modalClose = new EventEmitter<boolean>() 

  createUser(value: string){
    this.request.addUser(value).subscribe({error: (res)=>{
        if(res.status === 201)
          this.modalClose.emit(true)
      }})
  }

}

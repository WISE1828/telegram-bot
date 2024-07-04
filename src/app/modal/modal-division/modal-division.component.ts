import { Component, EventEmitter, Output, inject } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-modal-division',
  templateUrl: './modal-division.component.html',
  styleUrl: './modal-division.component.css'
})
export class ModalDivisionComponent {
  request = inject(RequestService)

  @Output()
  modalClose = new EventEmitter<boolean>() 

  createDivision(value: string){
    this.request.addDivision(value).subscribe({error: (res)=>{
        if(res.status === 201)
          this.modalClose.emit(true)
      }})
  }
}

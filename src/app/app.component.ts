import { Component, inject } from '@angular/core';
import { AuthenticateService } from './services/authenticate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: '{{title}}'
})
export class AppComponent {
  authService = inject(AuthenticateService)



  constructor() {

  }
}

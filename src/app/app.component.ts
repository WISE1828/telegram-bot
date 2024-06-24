import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: '{{title}}'
})
export class AppComponent {
  @Input('statusCodeCheck') statusCodeCheck = true
  title = 'web--admin--app';

  constructor() {

  }
}

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LogBtnComponent } from './log-btn/log-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    AdminPanelComponent,
    LogBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

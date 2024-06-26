import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { LogBtnComponent } from './log-btn/log-btn.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FinanceComponent } from './finance/finance.component';
import { UsersComponent } from './users/users.component';
import { apiInterceptor } from './interceptors/api.interceptor';
import { ModalComponent } from './modal/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    LogBtnComponent,
    FinanceComponent,
    UsersComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
    withInterceptors([apiInterceptor]),
  )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

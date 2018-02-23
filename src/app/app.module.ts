import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Test01Component } from './test01/test01.component';
import { Test02Component } from './test02/test02.component';
import { AppRoutingModule } from './/app-routing.module';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './appServices';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Test01Component,
    Test02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'td-frontend-dev-test-app' }),
    HttpClientModule,
    BrowserAnimationsModule

  ],
  bootstrap: [AppComponent],
  providers: [DataService, { provide: LOCALE_ID, useValue: 'fr' }]
})
export class AppModule { }

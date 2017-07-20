import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttprequestComponent } from './httprequest/httprequest.component';
import { AppRoutingModule } from './app-routing.module';
import { TruncatePipe } from 'angular2-truncate';
import {APP_CONFIG, AppConfig} from './config/app.config';

@NgModule({
  declarations: [
    AppComponent,
    HttprequestComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [
    {provide: APP_CONFIG, useValue: AppConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
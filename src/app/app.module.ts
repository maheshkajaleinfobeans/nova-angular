import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttprequestComponent } from './httprequest/httprequest.component';
import { AppRoutingModule } from './app-routing.module';
import { TruncatePipe } from 'angular2-truncate';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
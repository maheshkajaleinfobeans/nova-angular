import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TruncatePipe } from 'angular2-truncate';
import { TopAlbumsComponent } from './homepage/top-albums/top-albums.component';
import { TopSinglesComponent } from './homepage/top-singles/top-singles.component';
import { TopFeaturedComponent } from './homepage/top-featured/top-featured.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistComponent } from './artist/artist.component';

@NgModule({
  declarations: [
    AppComponent,
    TruncatePipe,
    TopAlbumsComponent,
    TopSinglesComponent,
    TopFeaturedComponent,
    HeaderComponent,
    HomepageComponent,
    ArtistComponent
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
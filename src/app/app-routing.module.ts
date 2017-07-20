import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistComponent } from './artist/artist.component';

const appRoutes: Routes = [
   // { path: '', redirectTo: '/getresponse', pathMatch: 'full' },
  { path: '', component: HomepageComponent },
  { path: 'artist', component: ArtistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttprequestComponent } from './httprequest/httprequest.component';


const appRoutes: Routes = [
   // { path: '', redirectTo: '/getresponse', pathMatch: 'full' },
  { path: '', component: HttprequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

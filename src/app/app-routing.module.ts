import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TvshowComponent } from './tvshow/tvshow.component';


const routes: Routes = [
  {path:"home",component: HomeComponent},
  {path:"tvshow",component: TvshowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

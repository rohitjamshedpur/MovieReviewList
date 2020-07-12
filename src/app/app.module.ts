import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { MovieService } from './movie.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { NgxSpinnerModule } from "ngx-spinner"; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TvshowComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule  
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

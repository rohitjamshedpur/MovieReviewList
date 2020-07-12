import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgxSpinnerService } from "ngx-spinner"; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService]
})
export class HomeComponent implements OnInit {
  movies;
  constructor( private movieService: MovieService,private SpinnerService: NgxSpinnerService) {  }
  
  getMovies() {
    
    this.SpinnerService.show();
    this.movieService.getMovies().subscribe(
      data => {

        this.movies = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
      
    );
    this.SpinnerService.hide();  
   

  }

  ngOnInit() {
    this.getMovies();
}
}
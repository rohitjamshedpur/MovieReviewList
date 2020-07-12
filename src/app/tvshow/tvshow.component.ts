import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css'],
  providers: [MovieService]
})
export class TvshowComponent implements OnInit {
  tvshow;
  constructor( private movieService: MovieService) {  }
  
  getTVshow() {
    this.movieService. getTvShows().subscribe(
      data => {
        this.tvshow = data;
        console.log(data);
      },
      err => console.log(err),
      () => console.log(`success`)
    );

  }

  ngOnInit() {
    this.getTVshow();
}
}

import {Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  deptId;
  url = 'https://api.themoviedb.org/3/movie/popular?api_key=7c9acef8c16f26255de8d2efa354a087&language=en-US&page=1';
  movies : any[] ;
  movieImagePrefix = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  constructor(private route : ActivatedRoute , private http:Http , private _location: Location) { 
    // this.route.params.subscribe( params => console.log(params) )
  }
  movieDetail;
  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'))
    // console.log(id);
    this.deptId = id;
    let that = this;
    
    this.http.get(this.url).
      map((response) => response.json()).
      subscribe((data) => {
        console.log(data.results);
        this.movies = data.results;
        this.movies.forEach(function(movie){
          console.log(movie.id);
          if(movie.id == that.deptId){
            that.movieDetail = movie;
          }
        })
      }) 
  }

  goBack(){
    this._location.back();
  }
}

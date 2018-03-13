import { SearchFilterPipe } from './../../search-filter.pipe';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  url = 'https://api.themoviedb.org/3/movie/popular?api_key=7c9acef8c16f26255de8d2efa354a087&language=en-US&page=1';

  constructor(private http:Http , private router:Router) { }
  movies : any[] ;
  movieImagePrefix = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
  ngOnInit() {
    this.http.get(this.url).
      map((response) => response.json()).
      subscribe((data) => {
        console.log(data.results);
        this.movies = data.results;
      }) 
  }

  seeMore(movie){
    this.router.navigate(['movies' , movie.id]);
  }

  ngDoCheck(){
    
  }
  delete(id){
  //  console.info(id);
    let that=this;
    this.movies.forEach(function(val,index){
      // console.log(val , index);
      // console.log(val.id);
      if(val.id === id){
        console.log("Delete this ..." , index);
        // console.info("ifff");
        // debugger;
        if(index !== -1){
          that.movies.splice(index, 1);
        }
        console.log(that.movies);
       }
    })
    
   
  }
}



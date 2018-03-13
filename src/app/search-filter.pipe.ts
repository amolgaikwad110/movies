import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter', 
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(movies:any, term: string): any {
    //check search term if it is undefined
    if(term === undefined){
      return movies;
    }
    //
    return movies.filter(function(movie){
      return movie.title.toLowerCase().includes(term.toLowerCase());
    }) 
  }

}

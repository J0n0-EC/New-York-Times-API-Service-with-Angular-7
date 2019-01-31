import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NYTApiService {

  constructor(private http:HttpClient) { }

  initMovies(){
   return this.http.get('https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=di3C4OLJfhh8wTLnrfEMMAK3KqkNgBOr');
  }
  initArticles(){
   return this.http.get('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=di3C4OLJfhh8wTLnrfEMMAK3KqkNgBOr');
  }
  initTopstories(){
   return this.http.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=di3C4OLJfhh8wTLnrfEMMAK3KqkNgBOr');
  }

}

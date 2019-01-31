import { Component } from '@angular/core';
import { NYTApiService } from './nytapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mMovies:Array<any>;
  mArticles:Array<any>;
  mTopstories:Array<any>;
  
  constructor(private nytapi:NYTApiService){}

  ngOnInit() {
          //load movies
        this.nytapi.initMovies().subscribe(data => this.mMovies = data['movies']);
        //load articles
      this.nytapi.initArticles().subscribe(data => this.mArticles = data['articles']);
      //load top stories
    this.nytapi.initTopstories().subscribe(data => this.mTopstories = data['stories']);
    }

}

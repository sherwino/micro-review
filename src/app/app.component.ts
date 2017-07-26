import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import { VERSION } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.min.css'],
  providers: [SearchService]
})


export class AppComponent {
  title = 'microReviews';
  results: Object;
  searchTerm$ = new Subject<string>();

  myApiData: Array<any>;

  constructor(private http:Http, private searchService: SearchService) {
    console.log(VERSION.full);

    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
    // I saw this example to pull data from a RESTful API easily
    // this.http.get("https://jsonplaceholder.typicode.com/photos")
    // .map( response => response.json())
    // .subscribe(res => this.myApiData = res);
      });
  }
}

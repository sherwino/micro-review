import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  BASE_URL: string = 'environment.apiUrl';
  queryUrl: string = '?=';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http.get(this.BASE_URL + "/api/search" + this.queryUrl + term)
        .map(res => res.json());
  }
}


// THIS IS ALL OF THE COMPONENT CODE
// import { SearchService } from './search.service';
// import { Subject } from 'rxjs/Subject';
// import { Component } from '@angular/core';
// import { Http } from '@angular/http';
//
// import { VERSION } from '@angular/core';
//
// declare const $:any;
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./styles.min.css'],
//   providers: [SearchService]
// })
//
//
// export class AppComponent {
//   title = 'microReviews';
//
//   results: Object;
//   searchTerm$ = new Subject<string>();
//
//   myApiData: Array<any>;
//
//   constructor(private http:Http, private searchService: SearchService) {
//     console.log(VERSION.full);
//
//     this.searchService.search(this.searchTerm$)
//       .subscribe(results => {
//         this.results = results.results;
//     // I saw this example to pull data from a RESTful API easily
//     // this.http.get("https://jsonplaceholder.typicode.com/photos")
//     // .map( response => response.json())
//     // .subscribe(res => this.myApiData = res);
//       });
//   }
// }

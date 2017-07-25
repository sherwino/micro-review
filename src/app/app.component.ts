import { Component } from '@angular/core';
import { VERSION } from '@angular/core';
import { Http } from '@angular/http';

declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.min.css']
})


export class AppComponent {
  title = 'microReviews';

  myApiData: Array<any>;

  constructor(private http:Http) {
    console.log(VERSION.full);
    // I saw this example to pull data from a RESTful API easily
    this.http.get("https://jsonplaceholder.typicode.com/photos")
    .map( response => response.json())
    .subscribe(res => this.myApiData = res);
  }


}

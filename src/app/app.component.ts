import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

// Now I am just trying to see how to have the products searchable from all of the pages
import { ProductService } from './services/product.service';


declare const $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.min.css'],

})


export class AppComponent implements OnInit {
  title = 'microReviews';
  products:     any[] = [];
  pattern:      string;  //product search pattern
  errorMessage: string = '';

  constructor(private myProductService: ProductService, private http:Http) {

      }
      ngOnInit() {
        this.myProductService.getList()
        .then((productList) => {
          this.products = productList;
        })
        .catch((err) => {
          this.errorMessage = 'There was an error with your request... try again later';

        });
      }
  }

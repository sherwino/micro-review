import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductService } from '../services/product.service';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [SearchService]
})
export class ProductListComponent implements OnInit {
  products:     any[] = [];
  errorMessage: string = ''; //not sure why I need this here yet
  results:      Object;
  searchTerm$ = new Subject<string>();

  myApiData:    Array<any>;
  title =       "microReviews - Browse";

  constructor(private myProductService: ProductService, private http:Http, private searchService: SearchService) {
    this.searchService.search(this.searchTerm$).subscribe(results => {
        this.results = results.results;
  });
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

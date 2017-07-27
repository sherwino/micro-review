import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})


export class ProductListComponent implements OnInit {
  products:     any[] = [];
  errorMessage: string = ''; //not sure why I need this here yet
  pattern:      string;  //product search pattern
  title =       "microReviews - Browse";

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

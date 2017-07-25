import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:     any[] = [];
  errorMessage: string = ''; //not sure why I need this here yet
  title = "microReviews - Browse";

  constructor(private myProductService: ProductService) { }

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

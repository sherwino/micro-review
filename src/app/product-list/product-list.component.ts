import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  errorMessage: string = ''; //not sure why I need this here yet

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

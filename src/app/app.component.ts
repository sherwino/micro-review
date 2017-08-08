import * as jQuery from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { APPCONFIG } from './config';
import { LayoutService } from './layout/layout.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Http } from '@angular/http';
// Now I am just trying to see how to have the products searchable from all of the pages
import { ProductService } from './services/product.service';

// 3rd
import 'styles/material2-theme.scss';
import 'styles/bootstrap.scss';
// custom
import 'styles/layout.scss';
import 'styles/theme.scss';
import 'styles/ui.scss';
import 'styles/app.scss';

// This was so that you could use jQuery
// declare const $:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./styles.min.css'],
  providers: [LayoutService],

})


export class AppComponent implements OnInit {
  public AppConfig: any;
  title = 'microReviews';
  products:     any[] = [];
  pattern:      string;  //product search pattern
  errorMessage: string = '';

  constructor(
    private myProductService: ProductService,
    private http:Http,
    private router: Router
  ) {

      }
      ngOnInit() {
        this.AppConfig = APPCONFIG;
        // Scroll to top on route change
        this.router.events.subscribe((evt) => {
          if (!(evt instanceof NavigationEnd)) {
            return;
          }
          document.body.scrollTop = 0;
        });
        this.myProductService.getList()
        .then((productList) => {
          this.products = productList;
        })
        .catch((err) => {
          this.errorMessage = 'There was an error with your request... try again later';

        });
      }
  }

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
// import { CompleterService, CompleterData } from 'ng2-completer';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})


export class ReviewComponent implements OnInit {
  savedProduct: Object;
  //this object is going to hold the key value pairs for the Reviews
  newProduct: any = {};
  errorMessage: string;
  // I will try to populate alot of this data using the UPC search
  // this is a little complicated because products like the iPhone could have different UPCs
  // different model numbers, different configurations, and diffirent manufacturers
  // to not get over my head will have to limit some of these concepts to string arays instead of references to other objects
  brand:     String;    // Apple
  modelName: String;    // iPhone 6s Plus
  modelNum:  String;    // A1633
  partNum:   String;    // MKR82LL/A
  prodUPC:   String;    //  700362685371
  mfgBy:     String;  // [Foxcomm, Samsung, Carl Zeiss]
  mfgStart:  Date;      // March 15, 2015
  mfgEnd:    Date;      // November 15, 2017
  prodParts: String;  // [Camera, Microphone, Speakers]
  prodImg:   String;    // Don't know if this is going to work with photo upload

  constructor(
    private myRoute: ActivatedRoute,
    private myProductService: ProductService,
    private myRouter: Router,
  ) { }

  ngOnInit() {
  }

  newReviewform() {
    //lets see what we are receiving from the form
      this.myProductService.createNew(this.newProduct).then((dataFromApi) => {
        console.log(this.newProduct);
        this.myRouter.navigate(['/submit/new']);

      })
      .catch((errResponse) => {
        const apiInfo = errResponse.json();
        this.errorMessage = apiInfo.message;
      })
    }

}

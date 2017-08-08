import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
// import { CompleterService, CompleterData } from 'ng2-completer';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css']
})

export class SubmitReviewComponent implements OnInit {

// the idea is that the products are going to come from api that has a DB of UPCs
// the user searches for the product and they select the product they want to review
// when they do that they and click save they are submitting a form with all of the data of the selected object
// that information goes to our db and when user writes the review they can post additional information
// this additional info will post to our local DB version of the object

// the part that I haven't figured out is...what happens when the object already exist in the DB
// maybe display two list, internal site DB ("reviewd on micro"), and external DB ("not yet reviewed")

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
    // creating a routing instance in this view
    private myRoute: ActivatedRoute,
    private myProductService: ProductService,
    private myRouter: Router,
    // the AutoCompleteService
    // private completerService: CompleterService
  ) { }  // <<<<----This goes in there this.dataService = completerService.local(this.searchData, 'color', 'color')

  ngOnInit() {
    // similar to document.ready
    // listen to all of the paramaters passed through the active route
    // return the parameters as an object
    // this.myRoute.params.subscribe((params) => this.newProduct = {} );
  }

// when you submit the form from the dom it calls this function which will capture all of the values
newProductform() {
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

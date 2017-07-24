import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { CompleterService, CompleterData } from 'ng2-completer';
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
mfgBy:     String[];  // [Foxcomm, Samsung, Carl Zeiss]
mfgStart:  Date;      // March 15, 2015
mfgEnd:    Date;      // November 15, 2017
prodParts: String[];  // [Camera, Microphone, Speakers]
prodImg:   String;    // Don't know if this is going to work with photo upload

//Testing this AutoCompleteService
// protected searchStr: string;
// protected captain: string;
// protected dataService: CompleterData;
// protected searchData = [
//   { color: 'red', value: '#f00' },
//   { color: 'green', value: '#0f0' },
//   { color: 'blue', value: '#00f' },
//   { color: 'cyan', value: '#0ff' },
//   { color: 'magenta', value: '#f0f' },
//   { color: 'yellow', value: '#ff0' },
//   { color: 'black', value: '#000' }
// ];
// protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];


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
    // this.myRoute.params.subscribe((params) => this.newReview = {} );
  }

// when you submit the form from the dom it calls this function which will capture all of the values
newProductform(formData) {
  //lets see what we are receiving from the form
  console.log(formData);
    this.myProductService.createNew(this.newProduct).then((formData) => {
      this.myRouter.navigate(['/browse']);

    })
    .catch((errResponse) => {
      const apiInfo = errResponse.json();
      this.errorMessage = apiInfo.message;
    })
  }
}

//https://api.upcitemdb.com/prod/trial/search?s=MacBook%20Pro&brand=Apple&match_mode=0&type=product
// this.brand = "";
// this.modelName = "";
// this.prodUPC = "";
// this.mfgBy = [];
// // this.mfgStart = "";
// // this.mfgEnd = "";
// this.prodParts = [];
// this.prodImg = "";
// this.newReview = {};

// this.brand =        datafromform.form.controls.brand._value;
// this.modelName =    datafromform.form.controls.modelName._value;
// this.modelNum =     datafromform.form.controls.modelNum._value;
// this.prodUPC =      datafromform.form.controls.prodUPC._value;
// this.mfgBy =        datafromform.form.controls.mfgBy._value.split(",");
// // this.mfgStart =  datafromform.form.controls.mfgStart._value;
// // this.mfgEnd =    datafromform.form.controls.mfgEnd._value;
// this.prodParts =    datafromform.form.controls.prodParts._value.split(",");
// this.prodImg =      datafromform.form.controls.prodImg._value;
// //
// // // then lets call the function that is going to submit all of this info to the backend express app
// // // note the scope
// this.reviewtoApi();


// since this object is going directly to the backend the key ie brand: needs to match the mongo one
// reviewtoApi() {
//   this.newReview = {
//     brand:               this.brand,
//     model:               this.modelName,
//     modelNum:            this.modelNum,
//     productUPC:          this.prodUPC,
//     manufacturedBy:      this.mfgBy,
//     // manufacturingStart:  this.mfgStart,
//     // manufacturingStop:   this.mfgEnd,
//     productParts:        this.prodParts,
//     productImg:          this.prodImg
//
//   }

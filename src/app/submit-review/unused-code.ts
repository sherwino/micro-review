import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class SessionService {

  constructor(private http: Http) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
    return this.http.post(`/signup`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  login(user) {
    return this.http.post(`/login`, user)
      .map(res => res.json())
      .catch(this.handleError);
  }

  logout() {
    return this.http.post(`/logout`, {})
      .map(res => res.json())
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`/loggedin`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPrivateData() {
    return this.http.get(`/private`)
      .map(res => res.json())
      .catch(this.handleError);
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
//   this.newProduct = {
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

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class ProductService {
  // maybe I should have an env variable here instead of localhost
  BASE_URL: string = environment.apiUrl;

  constructor(private myHttp: Http) { }

  getList() {
    return this.myHttp.get(`${this.BASE_URL}/api/products`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

//send a get request to the express api
// localhost:3000/api/products/product#1
// using the promise angular will wait for the response
// and then store the response in the json to be utilized by angular
  get(id) {
    return this.myHttp.get(`${this.BASE_URL}/api/products/${id}`)
    .toPromise()
    .then(apiResponse => apiResponse.json())
  }

// this when you want to send something to the middleware
// like req.body
// so you send a post request to the express api with the dataToSend
// and express receives it to do whatever with this information
// in this case we want express to grab the data and post it to mongoDB
createNew(dataToSend) {
  return this.myHttp.post(`${this.BASE_URL}/api/products`, dataToSend)
  .toPromise()
  .then(apiResponse => apiResponse.json());
}

//very similar to the get request but now you are asking the express api to delete
// then you want to get the results of that request in a json
delete(id) {
  return this.myHttp.delete(`${this.BASE_URL}/api/products/${id}`)
  .toPromise()
  .then(apiResponse => apiResponse.json())

}


}

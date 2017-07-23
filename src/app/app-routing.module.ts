//importing the core angular module
import { NgModule } from '@angular/core';
//importing the routing module to allow me to define routes in this file
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { LoginComponent } from './login/login.component';
// import { FileUploadComponent } from ./'file-upload/file-upload.component';

const routes: Routes = [
  {
    path: 'browse',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductsComponent
  },

  {
    path: 'submit',
    component: SubmitReviewComponent
  },

  {
    // the login/logout/signup are going to be in the same component like in express
    path: 'login',
    component: LoginComponent
  },

  {
    // the login/logout/signup are going to be in the same component like in express
    path: 'logout',
    component: LoginComponent
  },

  {
    // the login/logout/signup are going to be in the same component like in express
    path: 'signup',
    component: LoginComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

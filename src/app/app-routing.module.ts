//importing the core angular module
import { NgModule } from '@angular/core';
//importing the routing module to allow me to define routes in this file
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
// import { FileUploadComponent } from ./'file-upload/file-upload.component';

const routes: Routes = [
  {
    path: 'browse',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

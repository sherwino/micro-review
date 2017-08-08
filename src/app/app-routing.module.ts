//importing the core angular module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//importing the routing module to allow me to define routes in this file
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { LoginComponent } from './login/login.component';
import { ReviewComponent } from './review/review.component';
// import { FileUploadComponent } from ./'file-upload/file-upload.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Page Layouts
import { PageLayoutFullscreenComponent } from './page-layouts/fullscreen/fullscreen.component';


// const routes: Routes = [
//
//
//
// ];

const AppRoutes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: LayoutComponent },
  { path: 'extra', loadChildren: './extra-pages/extra-pages.module#ExtraPagesModule' },
  { path: 'fullscreen', component: PageLayoutFullscreenComponent },
  { path: 'localhost:4200', redirectTo: 'app', pathMatch: 'full' },
  // {
  //   path: 'browse',
  //   component: ProductListComponent
  // },
  // {
  //   path: 'product/:id',
  //   component: ProductsComponent
  // },
  //
  // {
  //   path: 'submit',
  //   component: SubmitReviewComponent
  // },
  //
  // {
  //   path: 'submit/new',
  //   component: ReviewComponent
  // },
  //
  // {
  //   // the login/logout/signup are going to be in the same component like in express
  //   path: 'login',
  //   component: LoginComponent
  // },
  //
  // {
  //   // the login/logout/signup are going to be in the same component like in express
  //   path: 'logout',
  //   component: LoginComponent
  // },
  //
  // {
  //   // the login/logout/signup are going to be in the same component like in express
  //   path: 'signup',
  //   component: LoginComponent
  // },
];

//
// @NgModule({
//   imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
//   exports: [RouterModule]
// })

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
// export class AppRoutingModule { }

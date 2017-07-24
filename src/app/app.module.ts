import { BrowserModule, DomSanitizer } from '@angular/platform-browser'; //need to see what DomSanitizer does
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //a form handling module from angular core
import { HttpModule } from '@angular/http'; //a HTTP routing module
import { Ng2CompleterModule } from 'ng2-completer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
//a module that will let me select files and upload them
// ng2-file-upload is a third party module need to install to use
// import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

// to be able to import the modules into app.module all of the modules mention need to have an export
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ArticlesComponent,
    CommentsComponent,
    LoginComponent,
    ProfileComponent,
    ProductListComponent,
    SubmitReviewComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2CompleterModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

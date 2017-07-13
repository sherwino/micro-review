import { BrowserModule, DomSanitizer } from '@angular/platform-browser'; //need to see what DomSanitizer does
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //a form handling module from angular core
import { HttpModule } from '@angular/http'; //a HTTP routing module
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
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ReviewsComponent,
    ArticlesComponent,
    CommentsComponent,
    LoginComponent,
    ProfileComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

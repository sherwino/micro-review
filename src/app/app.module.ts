import { BrowserModule, DomSanitizer } from '@angular/platform-browser'; //need to see what DomSanitizer does
import { NgModule, ApplicationRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'; //a form handling module from angular core
import { HttpModule } from '@angular/http'; //a HTTP routing module

// import { Ng2CompleterModule } from 'ng2-completer';
import {MdButtonModule, MdCheckboxModule, MdCardModule, MdMenuModule,
        MdToolbarModule, MdIconModule, MdGridListModule, MdSidenavModule } from '@angular/material';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Layout
import { LayoutComponent } from './layout/layout.component';
import { PreloaderDirective } from './layout/preloader.directive';
// Header
import { AppHeaderComponent } from './layout/header/header.component';
// Sidenav
import { AppSidenavComponent } from './layout/sidenav/sidenav.component';
import { ToggleOffcanvasNavDirective } from './layout/sidenav/toggle-offcanvas-nav.directive';
import { AutoCloseMobileNavDirective } from './layout/sidenav/auto-close-mobile-nav.directive';
import { AppSidenavMenuComponent } from './layout/sidenav/sidenav-menu/sidenav-menu.component';
import { AccordionNavDirective } from './layout/sidenav/sidenav-menu/accordion-nav.directive';
import { AppendSubmenuIconDirective } from './layout/sidenav/sidenav-menu/append-submenu-icon.directive';
import { HighlightActiveItemsDirective } from './layout/sidenav/sidenav-menu/highlight-active-items.directive';
// Customizer
import { AppCustomizerComponent } from './layout/customizer/customizer.component';
import { ToggleQuickviewDirective } from './layout/customizer/toggle-quickview.directive';
// Footer
import { AppFooterComponent } from './layout/footer/footer.component';
// Search Overaly
import { AppSearchOverlayComponent } from './layout/search-overlay/search-overlay.component';
import { SearchOverlayDirective } from './layout/search-overlay/search-overlay.directive';
import { OpenSearchOverlaylDirective } from './layout/search-overlay/open-search-overlay.directive';

// Pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageLayoutFullscreenComponent } from './page-layouts/fullscreen/fullscreen.component';

// Sub modules
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';

// hmr
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
//a module that will let me select files and upload them
// ng2-file-upload is a third party module need to install to use
// import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

// to be able to import the modules into app.module all of the modules mention need to have an export
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { SubmitReviewComponent } from './submit-review/submit-review.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { ProductSearchPipe } from './product-search';
import { SearchService } from './services/search.service'


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ArticlesComponent,
    CommentsComponent,
    LoginComponent,
    ProfileComponent,
    ProductListComponent,
    SubmitReviewComponent,
    HomeComponent,
    ReviewComponent,
    ProductSearchPipe,
    // Layout
    LayoutComponent,
    PreloaderDirective,
    // Header
    AppHeaderComponent,
    // Sidenav
    AppSidenavComponent,
    ToggleOffcanvasNavDirective,
    AutoCloseMobileNavDirective,
    AppSidenavMenuComponent,
    AccordionNavDirective,
    AppendSubmenuIconDirective,
    HighlightActiveItemsDirective,
    // Customizer
    AppCustomizerComponent,
    ToggleQuickviewDirective,
    // Footer
    AppFooterComponent,
    // Search overlay
    AppSearchOverlayComponent,
    SearchOverlayDirective,
    OpenSearchOverlaylDirective,
    //
    DashboardComponent,
    // Pages
    PageLayoutFullscreenComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    // Ng2CompleterModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdSidenavModule


  ],
  providers: [ProductService, SearchService],
  bootstrap: [AppComponent],
  exports: [ProductSearchPipe],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

  export class AppModule {
    constructor(public appRef: ApplicationRef) {}
    hmrOnInit(store) {
      console.log('HMR store', store);
    }
    hmrOnDestroy(store) {
      const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
      // recreate elements
      store.disposeOldHosts = createNewHosts(cmpLocation);
      // remove styles
      removeNgStyles();
    }
    hmrAfterDestroy(store) {
      // display new elements
      store.disposeOldHosts();
      delete store.disposeOldHosts;
    }
  }

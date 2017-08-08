import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    LayoutRoutingModule,
    SharedModule,
  ],
  declarations: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class LayoutModule {}

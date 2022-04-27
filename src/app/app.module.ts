import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShippingCreateComponent } from './components/shipping-create/shipping-create.component';
import { ShippingEditComponent } from './components/shipping-edit/shipping-edit.component';
import { ShippingDeleteComponent } from './components/shipping-delete/shipping-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ShippingCreateComponent,
    ShippingEditComponent,
    ShippingDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

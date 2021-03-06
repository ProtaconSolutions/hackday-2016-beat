import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routes';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import {ProductResolver} from "./product/resolves/product.resolver";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {FootermenuComponent} from "./footermenu/footermenu.component";
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    ProductDetailsComponent,
    FootermenuComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [ProductResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

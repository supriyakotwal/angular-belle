import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavSidebarComponent } from '../navsidebar/navsidebar.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { ProductComponent } from '../product/product.component';
import { ProductDetailsComponent } from '../product/productdetails.component';
import { CartComponent } from '../cart/cart.component';
import { dataService } from './dataservice.service';
import { productService } from '../product/product.service';
import {loginService} from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [dataService, productService, loginService],
  bootstrap: [AppComponent,NavSidebarComponent, LoginComponent ,HeaderComponent,CartComponent]
})
export class AppModule { }

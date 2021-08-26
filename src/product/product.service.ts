import { Injectable } from '@angular/core';

@Injectable()
export class productService {
  productId="";
  products : any;
  productById : any;

  addToCartList : any = [];

}
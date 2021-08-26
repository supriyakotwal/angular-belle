import { Component, Input } from '@angular/core';
import {productService} from '../product/product.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {
    constructor(
        public productService: productService
    ) { }

    ngOnInit(): void {
        console.log(this.productService.addToCartList);
    }
}
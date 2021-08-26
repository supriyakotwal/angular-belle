import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {productService} from './product.service';
import {dataService} from '../app/dataservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductDetailsComponent implements OnInit{
    private sub: any;
    idParam: string = "";
    productList : any;
    addToCartList: any = [];
    constructor(
        private route: ActivatedRoute,
        public productService: productService,
        private SVC: dataService
    ) { }

    ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
        this.idParam = params['productId'];
      });
      this.getProductsById(this.idParam);

    }
    /* to get list of product from product service.
    getProducts() {
        this.productList = this.productService.products;
    }*/
    getProductsById(id:string) {
        this.productList = this.productService.products;
        let newarr = this.productList.map((item: { id: any, name: string; }) => {
            if(item.id === this.idParam) {
                this.productService.productById = item;
                this.SVC.headerText = item.name;
            }
        })
    }

    addToCart(id:string) {
        this.productService.addToCartList.push(id);
    }
}

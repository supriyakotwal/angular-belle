import { Component, OnInit  } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {productService} from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  li:any;
  lis:any = [];
  constructor(private http : HttpClient,
    private productService: productService){}
  ngOnInit(): void {
    this.http.get('https://hub.dummyapis.com/vj/NpB8oPO')
    .subscribe(Response => {
  
      // If response comes hideloader() function is called
      // to hide that loader 
      this.li=Response;
      for (let key in this.li) {
        this.lis = this.li[key].product;
      }
      this.setProducts(this.lis);
    });
  }

  setProducts(productList:any) {
    this.productService.products = productList;
  }
}

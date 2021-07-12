import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { TypeProduct } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: TypeProduct[];
  validForm = false;
  detail: TypeProduct ={
    id : 0,
    name : '',
    price : 0,
    status : false,
    img : '',
    
  }
 
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.products = this.productService.products;
  }








  onHandleRemove() {}
  onHandleChangeStatus() {
    // this.product.status = !this.product.status
  }
  onHandleChangeName(e: any) {
    // this.product.name = e.target.value
  }
  onDetail(product: TypeProduct) {
    console.log(product);
    this.detail = product;
  }

}

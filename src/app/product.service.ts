import { Injectable } from '@angular/core';
import { TypeProduct } from './product/product';
import {dataFaker} from './data-fake'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: TypeProduct[] = dataFaker;
  constructor() { }
  getProducts(){
    this.products = dataFaker;
  }
  addProduct(item: TypeProduct){
    this.products.push(item)
  }
}

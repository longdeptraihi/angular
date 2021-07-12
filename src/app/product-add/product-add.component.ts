import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypeProduct } from '../product/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() newProductEvent = new EventEmitter<TypeProduct>();

  product: TypeProduct = {
    id : 0,
    name: '',
    price: 0,
    status: false,
    img: ''
  };
  constructor() {}

  ngOnInit(): void {}
  onAddProduct() {
    this.newProductEvent.emit(this.product);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { TypeProduct } from '../product/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: TypeProduct;
  constructor() { }

  ngOnInit(): void {
  }

}

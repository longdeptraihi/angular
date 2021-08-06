import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { TypeProduct} from '../product/product'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: TypeProduct ={
    id: 0,
    name: '',
    price: 0,
    img: '',
    status: true
  }

  constructor(
    private productService: ProductService,
    private activedRoute : ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo(){
    this.activedRoute.params.subscribe(params => {
      this.productService.get(params.id).subscribe(data => {
        this.product = data;
      })
    })
  }
  onUpdateProduct(){
   this.productService.updateProduct(this.product).subscribe(data => {
     this.router.navigateByUrl('/product');
   })
  }

}

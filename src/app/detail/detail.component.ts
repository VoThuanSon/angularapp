import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../products';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  productDetail:Products | undefined
  constructor(public prod:ProductService,public route:ActivatedRoute) {
    
  }
  ngOnInit(): void {   
    let id = this.route.snapshot.params['id'];
    this.prod.getProduct(id).subscribe(data => 
      this.productDetail = data
    )
  }
  AddToCart(itemToAdd: Products) {
    this.prod.Add(itemToAdd)
  }
  
}

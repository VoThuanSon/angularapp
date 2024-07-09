import { Component} from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public prod: ProductService,http:HttpClient) {
  }
  brand:any;
  searching: string = '';
  price: string = '';
  productsHome: Products[] = [];
  productsCart: Products[] = [];
  ngOnInit(): void {
    this.prod.getAllProduct().subscribe(data => 
      this.productsHome = data
    );
    this.prod.getAllProductCart().subscribe(data => 
      this.productsCart = data
    );
   
  }
  filter() {
    let x = Number(this.price)
    if (x >= 20 && x <= 50) {
      return this.productsHome.filter(x => x.price > 20 && x.price < 50)
    } else if (x >= 50 && x <= 80) {
      return this.productsHome.filter(x => x.price > 50 && x.price < 80)
    } else if (x > 80) {
      return this.productsHome.filter(x => x.price > 80)
    } else if (this.brand != null) {
      return this.productsHome.filter(x => x.brand == this.brand)
    } else {
      // search product   
      if (this.searching == null) {
        return this.productsHome;
      } else {
        if (this.searching) {
          return this.productsHome.filter((item) => {
            return (this.searching).toUpperCase().split(' ').every(v => item.productName.toUpperCase().includes(v));
          })
        } else {
          return this.productsHome;
        }
      }
    }
  }
  AddToCart(itemToAdd: Products) {
    this.prod.Add(itemToAdd).subscribe()
  }

}


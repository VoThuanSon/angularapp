import { Component, Signal } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  productCart: Products[] = [];
  //init cart
  constructor(public prod: ProductService) {
    this.prod.getAllProductCart().subscribe(data =>
      this.productCart = data
    )
  }
  // reload
  ngOnInit(): void {
    this.prod.getAllProductCart().subscribe(data =>
      this.productCart = data
    )
  }
  today = new Date();
  // get date now
  date = this.today.getDate() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getFullYear();
  // date + 5 day
  dateArrive = (this.today.getDate() + 5) + '-' + (this.today.getMonth() + 1) + '-' + this.today.getFullYear();
  // total price
  totalPrice() {
    let total = 0;
    this.productCart.forEach(e => {
      total += e.price * e.quantity;
    });
    return Math.round(total * 100) / 100
  }
  // total item
  totalItem() {
    let quantityProduct = 0;
    this.productCart.forEach(e => {
      quantityProduct += e.quantity;
    })
    return quantityProduct;
  }
  // remove item
  remove(id: string) {
    this.prod.remove(id).subscribe(data => {
      this.ngOnInit()
    })
  }
  // delete all
  deleteAll() {
    this.productCart.forEach(element => {
      this.remove(element.id);
    });
  }
  plusItem: Products
  plus(item: Products) {
    this.plusItem = this.productCart.find(x => x.id == item.id)
    this.plusItem.quantity += 1;
    this.prod.plus(this.plusItem).subscribe(data => {
      this.ngOnInit()
    });
  }
  minusItem: Products
  minus(item: Products) {
    this.minusItem = this.productCart.find(x => x.id == item.id)
    this.minusItem.quantity -= 1;
    this.prod.Minus(this.minusItem).subscribe(data => {
      this.ngOnInit()
    });
  }
  // form payment
  formPayMent = new FormGroup({
    firstName: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.required),
    accountNumber: new FormControl<number>(null, Validators.required),
    phone: new FormControl<number>(null, Validators.required),
    address: new FormControl<string>('', Validators.required)
  });
}

import { Injectable } from '@angular/core';
import { Products } from './products';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // data
  products: Products[] = []
  productsCart: Products[] = [];
  constructor(private http: HttpClient) {
    this.getAllProduct().subscribe(data =>
      this.products = data
    )
    this.getAllProductCart().subscribe(data =>
      this.productsCart = data
    )

  }
  private urlProduct = 'http://localhost:3000/products';
  private urlProductCart = 'http://localhost:3000/productCart';
  // data cart
  getAllProduct(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.urlProduct}`);
  }
  getProduct(id: string) {
    return this.http.get<Products>(`${this.urlProduct}/${id}`);
  }
  getAllProductCart(): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.urlProductCart}`);
  }
  getProductCart(id: string) {
    return this.http.get<Products>(`${this.urlProductCart}/${id}`);
  }
  // add product
  Add(itemToAdd: Products) {
    return this.http.post<Products>(`${this.urlProductCart}`, itemToAdd)
  }
  plus(item: Products) {
    return this.http.put<Products>(`${this.urlProductCart}/${item.id}`, item)
  }
  Minus(item: Products) {
    return this.http.put<Products>(`${this.urlProductCart}/${item.id}`, item)
  }
  remove(id: string) {
    return this.http.delete<Products>(`${this.urlProductCart}/${id}`);
  }
}
